import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Api from '../api';
import Testing from './testing';
import Card from './card';
import Btn from './btn';
import Option1 from './1080P';
import Option2 from './2K';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const data = [
  {
    text: 'PUBG : Battlegrounds',
    image: 'https://wallpapercave.com/wp/wp2208699.jpg',
  },
  {
    text: 'The Division',
    image:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6J3bGOgBVGBzsLcqhsb9Vq/78ef1dde2680357a88408c9df6dbf1cf/SeasonOneShadowTideLineup_No_Text__1_.png',
  },
  {
    text: 'Assasin Creed : Valhala',
    image:
      'https://lumiere-a.akamaihd.net/v1/images/image_05bea045.jpeg?region=0,0,1024,441&width=960',
  },
  {
    text: 'Ghost Recon : Wildlands',
    image:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4el7e9af7Oqyc8KAuZYMzp/1167fc7d56aaecb49ae7df6e5baa11f2/Keyart_LE_RESISTANCE_169.jpg',
  },
];

const {width, height} = Dimensions.get('window');

const BuildYourPc = ({navigation}) => {
  const [selected, setSelected] = useState([]);
  const [resolution, setResolution] = useState(0);

  useEffect(() => {
    Api.post('app/build-pc/get-games', {
      resolution: '2K',
    }).then((data) => {
      // console.log(data);
    });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{width, height, overflowX: 'hidden'}}>
      <ImageBackground
        source={require('../assets/dottedBackground.png')}
        style={{
          width,
          minHeight: height,
          overflowX: 'hidden',
          backgroundColor: '#2A2D39',
          paddingHorizontal: width * 0.09,
          paddingVertical: width * 0.07,
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../assets/back.png')}
              resizeMode="contain"
              style={{
                width: 48,
              }}
            />
          </TouchableOpacity>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              borderRadius: 10,
              borderColor: '#C01C8A',
              borderWidth: 1.5,
              height: 32,
              width: 153,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            colors={['rgba(184,37,154,0.16)', 'rgba(184,37,154,0.16)']}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
                color: '#fff',
                opacity: 0.87,
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              Advanced Builder
            </Text>
          </LinearGradient>
        </View>

        <Text
          style={{
            color: '#ECDBFA',
            fontSize: 20,
            lineHeight: 28,
            fontFamily: 'Michroma-Regular',
          }}>
          Select graphics and games to build your PC
        </Text>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: height * 0.04,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 116,
              top: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{width: 116}}
              onPress={() => {
                setResolution(0);
              }}>
              <Option1 selected={resolution === 0} />
            </TouchableOpacity>
            <View style={{position: 'relative', right: 50, width: 84}}>
              <TouchableOpacity
                onPress={() => {
                  setResolution(1);
                }}>
                <Option2 selected={resolution === 1} text="2K" />
              </TouchableOpacity>
            </View>
            <View style={{position: 'relative', right: 100, width: 84}}>
              <TouchableOpacity
                onPress={() => {
                  setResolution(2);
                }}>
                <Option2 selected={resolution === 2} text="4K" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Image
              resizeMode="contain"
              source={require('../assets/buildYourPc/search.png')}
              style={{
                height: 28,
                width: 80,
              }}
            />
          </TouchableOpacity>
        </View>

        {data.map((i, k) => (
          <View key={k} style={{width: '100%', marginVertical: 10}}>
            {!selected.includes(k) ? (
              <TouchableWithoutFeedback
                activeOpacity={0.2}
                onPressIn={() => {
                  setSelected([...selected, k]);
                }}>
                <Card text={i.text} image={i.image} />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                activeOpacity={0.2}
                onPressIn={() => {
                  setSelected(selected.filter((x) => x !== k));
                }}>
                <Testing text={i.text} image={i.image} />
              </TouchableWithoutFeedback>
            )}
          </View>
        ))}
        <TouchableOpacity activeOpacity={0.1}>
          <Btn />
        </TouchableOpacity>
        {/* 
        <ActivityIndicator
          color="#ECDBFA"
          size="large"
          style={{
            marginVertical: height * 0.08,
          }}
        /> */}
      </ImageBackground>
    </ScrollView>
  );
};

export default BuildYourPc;
