import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Btn from './btn';
import Back from './back'
import LinearGradient from 'react-native-linear-gradient';
import Api from '../api';

const {width, height} = Dimensions.get('window');

const BuildYourPc = () => {
  useEffect(() => {
    Api.post('app/build-pc/get-games', {
      resolution: '2K',
    }).then((data) => {
      console.log(data);
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
          <Image
            resizeMode="contain"
            source={require('../assets/buildYourPc/1080P.png')}
            style={{
              height: 38,
              width: 100,
            }}
          />

          <Image
            resizeMode="contain"
            source={require('../assets/buildYourPc/search.png')}
            style={{
              height: 28,
              width: 80,
            }}
          />
        </View>

        {[...Array(5).keys()].map((i, k) => (
          <TouchableOpacity
            key={k}
            style={{
              width: '100%',
              height: 0.11 * height,
            }}
            onPress={() => {}}
            style={{marginVertical: 10}}
            activeOpacity={0.8}>
            <Back />
            <Image
              source={{
                uri:
                  'https://ecard.enter-media.org/upload/iblock/f4b/f4b9d08eded902b28a713003a6c31f69.jpg',
              }}
              style={{
                height: 0.11 * height,
                borderRadius: 9,
                width: '100%',
              }}
            />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            height: height * 0.1,
          }}
          onPress={() => {}}>
          <Btn />
          {/* <ImageBackground
            resizeMode="contain"
            style={{
              height: height * 0.1,
              width: '100%',
              marginVertical: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../assets/buildYourPc/btn.png')}>
            <Text
              style={{
                color: '#fff',
                opacity: 0.87,
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Regular',
              }}>
              BUILD YOUR PC
            </Text>
          </ImageBackground> */}
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default BuildYourPc;
