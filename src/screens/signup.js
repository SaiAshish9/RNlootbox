import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Logo from '../assets/launch_screen.png';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/input';

import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const Signup = ({navigation}) => {
  const [selected, setSelected] = useState(false);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView
          style={{display: 'flex', alignItems: 'center', paddingBottom: 30}}>
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
              marginLeft: width * 0.15,
            }}>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  navigation.replace('signin');
                }}
                style={{
                  color: '#ECDBFA',
                  fontSize: 20,
                  paddingHorizontal: 10,
                  opacity: 0.24,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#ECDBFA',
                  fontSize: 20,
                  paddingHorizontal: 10,
                  borderLeftColor: '#ECDBFA',
                  borderLeftWidth: 1,
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>

          <Input placeholder="First Name" />

          <View style={{marginTop: 27}}>
            <Input placeholder="Last Name" />
          </View>

          <View style={{marginTop: 27}}>
            <Input placeholder="Phone Number" tel />
          </View>

          <View style={{marginTop: 27}}>
            <Input placeholder="Email" email />
          </View>

          <View style={{marginTop: 27}}>
            <Input placeholder="Password" password />
          </View>

          <View
            style={{
              marginLeft: width * 0.1,
              marginVertical: 10,
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelected(!selected);
              }}>
              <ImageBackground
                source={require('../assets/tiltedPurple.png')}
                style={{
                  height: height * 0.04,
                  width: width * 0.12,
                  marginRight: 10,
                  marginTop: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {selected && (
                  <Icon
                    name="check"
                    color="rgba(184,37,154,0.8)"
                    size={15}
                    solid
                  />
                )}
              </ImageBackground>
            </TouchableOpacity>

            <Text
              style={{
                marginTop: 10,
                color: '#dacae8',
                fontSize: 12,
                height: height * 0.04,
                display: 'flex',
                width: width * 0.7,
                flexWrap: 'wrap',
              }}>
              By clicking signup you agree to our{' '}
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  marginLeft: 5,
                }}>
                Terms & Conditions{' '}
              </Text>
              <Text>and </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Privacy Policy
              </Text>
            </Text>
          </View>

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
              onPress={() => {
                navigation.navigate('otp');
              }}
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
                SIGN UP
              </Text>
            </TouchableOpacity>
          </LinearGradient>

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
              <Image
                source={require('../assets/ic_google.png')}
                style={{
                  marginRight: 10,
                }}
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
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default Signup;
