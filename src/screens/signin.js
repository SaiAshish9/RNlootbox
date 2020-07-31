import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Logo from '../assets/launch_screen.png';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/input';

import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const Signin = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#2A2D39', '#261D2A']}
      style={{
        width: width,
        minHeight: height,
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        // justifyContent:'center'
      }}>
      <ScrollView>
        <SafeAreaView style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={{
              width: 150,
              // margin: 'auto',
              marginTop: width * 0.01,
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginBottom: 27,
              marginLeft: 12,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#ECDBFA',
                  fontSize: 20,
                  paddingHorizontal: 10,
                  borderRightColor: '#ECDBFA',
                  borderRightWidth: 1,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('signup');
              }}>
              <Text
                style={{
                  color: '#ECDBFA',
                  fontSize: 20,
                  paddingHorizontal: 10,
                  opacity: 0.24,
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>

          <Input placeholder="Phone Number Or Email" />
          <View style={{marginTop: 27}}>
            <Input placeholder="Password" password />
          </View>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginTop: 15,
              color: '#ECDBFA',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Forgot Password?
          </Text>

          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#C01C8A', '#865CF4']}
              style={{
                height: height * 0.09,
                borderRadius: 10,
                marginTop: 25,
                elevation: 100,
                width: width * 0.75,
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: height * 0.09,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    letterSpacing: 0.5,
                    fontStyle: 'italic',
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['rgba(184,37,154,0.16)', 'rgba(184,37,154,0.16)']}
              style={{
                height: height * 0.09,
                borderRadius: 10,
                borderColor: '#C01C8A',
                borderWidth: 1.5,
                marginTop: 18,
                elevation: 100,
                width: width * 0.75,
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: height * 0.09,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="google"
                  size={20}
                  color="#dc2eda"
                  style={{marginRight: 10}}
                  solid
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    letterSpacing: 0.5,
                    fontStyle: 'italic',
                  }}>
                  Continue With Gmail
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default Signin;
