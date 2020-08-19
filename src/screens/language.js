import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Context as AuthContext} from '../api/contexts/authContext';

const {height, width} = Dimensions.get('window');

const Language = ({navigation}) => {
  const {state, checkUser, setLanguage} = useContext(AuthContext);

  return (
    <LinearGradient
      colors={['#2A2D39', '#261D2A']}
      style={{
        width: width,
        minHeight: height,
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        // paddingLeft: width * 0.08,
        justifyContent: 'center',
      }}>
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                lineHeight: 28,
                fontSize: 20,
                color: '#ECDBFA',
                fontFamily: 'Michroma-Regular',
              }}>
              Choose your language
            </Text>
            <TouchableOpacity
              onPress={() => {
                setLanguage('arabic');
                {
                  state.token
                    ? navigation.replace('home')
                    : navigation.replace('auth', {
                        screen: 'signin',
                      });
                }
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['rgba(255,255,255,0.09)', 'rgba(255,255,255,0.003) ']}
                style={{
                  height: height * 0.2,
                  width: width * 0.75,
                  marginTop: height * 0.09,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 72,
                  }}
                  source={require('../assets/arabicFlag.png')}
                />
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontSize: 24,
                    lineHeight: 32,
                    marginLeft: 10,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  Arabic
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLanguage('english');
                {
                  state.token
                    ? navigation.replace('home')
                    : navigation.replace('auth', {
                        screen: 'signin',
                      });
                }
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['rgba(255,255,255,0.09)', 'rgba(255,255,255,0.003) ']}
                style={{
                  height: height * 0.2,
                  width: width * 0.75,
                  marginTop: height * 0.05,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 72,
                  }}
                  source={require('../assets/englishFlag.png')}
                />
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontSize: 24,
                    lineHeight: 32,
                    marginLeft: 10,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  English
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Language;
