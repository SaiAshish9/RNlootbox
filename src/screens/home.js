import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height,
        width,
        backgroundColor: '#000',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('buildYourPc');
        }}>
        <ImageBackground
          source={require('../assets/img_4.png')}
          style={{
            height,
            width: width * 0.496,
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            paddingLeft: width * 0.08,
            paddingVertical: height * 0.02,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Image
              resizeMode="contain"
              source={require('../assets/menuWhiteTilt.png')}
              style={{width: 48}}
            />
          </TouchableOpacity>
          <View style={{marginBottom: height * 0.1}}>
            <Text
              style={{
                color: '#ECDBFA',
                lineHeight: 32,
                width: '80%',
                fontSize: 28,
                textAlign: 'left',
                fontFamily: 'Michroma-Regular',
              }}>
              Build Your PC
            </Text>
            <Text
              style={{
                color: '#ECDBFA',
                lineHeight: 18,
                width: '80%',
                fontSize: 12,
                opacity: 0.5,
                textAlign: 'left',
                fontFamily: 'Montserrat-Regular',
              }}>
              Custom PC of your own needs
            </Text>
            <Image
              resizeMode="contain"
              source={require('../assets/ic_arrow0.png')}
              style={{
                width: 20,
                alignSelf: 'flex-start',
                marginTop: 10,
              }}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('lootStore');
        }}>
        <ImageBackground
          source={require('../assets/img_5.png')}
          style={{
            height,
            width: width * 0.496,
            display: 'flex',
            flex: 1,
            // alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingRight: width * 0.08,
            paddingVertical: height * 0.02,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-end',
              marginTop: height * 0.038,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('notifications');
              }}>
              <Image
                resizeMode="contain"
                source={require('../assets/ic_noti.png')}
                style={{width: 40, position: 'relative', zIndex: 10}}
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  resizeMode="contain"
                  source={require('../assets/ic_cart1.png')}
                  style={{width: 40}}
                />
              </TouchableOpacity>

              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#C01C8A', '#865CF4']}
                style={{
                  width: 16,
                  height: 16,
                  position: 'absolute',
                  right: -2,
                  top: -7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Bold',
                  }}>
                  2
                </Text>
              </LinearGradient>
            </View>
          </View>
          <View style={{marginBottom: height * 0.1, marginLeft: height * 0.05}}>
            <Text
              style={{
                color: '#ECDBFA',
                lineHeight: 32,
                // width:'90%',
                fontSize: 28,
                textAlign: 'right',
                fontFamily: 'Michroma-Regular',
              }}>
              Loot Store
            </Text>
            <Text
              style={{
                color: '#ECDBFA',
                lineHeight: 32,
                // width:'90%',
                fontSize: 12,
                opacity: 0.5,
                textAlign: 'right',
                fontFamily: 'Montserrat-Regular',
              }}>
              Buy items
            </Text>
            <Image
              resizeMode="contain"
              source={require('../assets/ic_arrow0.png')}
              style={{
                width: 30,
                marginTop: 10,
                alignSelf: 'flex-end',
              }}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
