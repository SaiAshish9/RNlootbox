import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import Logo from '../assets/launch_screen.png';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/input';
import {Fonts} from '../utils/Fonts';
import {Context as AuthContext} from '../api/contexts/authContext';
import Modal from '../components/modal';

const {height, width} = Dimensions.get('window');



const Signin = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {signin, state,googleSignIn} = useContext(AuthContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <LinearGradient
        colors={['#2A2D39', '#261D2A']}
        style={{
          width: width,
          minHeight: height,
          overflowX: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}>
        <ScrollView>
          <SafeAreaView style={{display: 'flex', alignItems: 'center'}}>
            <Image
              source={Logo}
              resizeMode="contain"
              style={{
                width: 150,
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
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('signin');
                }}>
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontSize: 20,
                    paddingHorizontal: 10,
                    borderRightColor: '#ECDBFA',
                    borderRightWidth: 1,
                    fontFamily: Fonts.Montserrat,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.push('signup');
                }}>
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontSize: 20,
                    paddingHorizontal: 10,
                    opacity: 0.24,
                    fontFamily: Fonts.Montserrat,
                  }}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>

            {state.error_msg ? <Modal msg={state.error_msg} /> : null}

            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Phone Number Or Email"
            />

            <View style={{marginTop: 27}}>
              <Input
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                password
              />
            </View>

            <Text
              style={{
                alignSelf: 'flex-end',
                marginTop: 15,
                color: '#ECDBFA',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: Fonts.Montserrat,
              }}>
              Forgot Password?
            </Text>

            <TouchableWithoutFeedback
              onPress={() => {
                signin({email, password});
              }}
              style={{
                width: '100%',
              }}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#C01C8A', '#865CF4']}
                style={{
                  height: height * 0.09,
                  borderRadius: 10,
                  marginTop: 25,
                  display: 'flex',
                  height: height * 0.09,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 100,
                  width: width * 0.75,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    letterSpacing: 0.5,
                    fontStyle: 'italic',
                    fontFamily: Fonts.Montserrat,
                  }}>
                  LOGIN
                </Text>
              </LinearGradient>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                googleSignIn();
              }}
              style={{
                width: '100%',
                height: height * 0.09,
                display: 'flex',
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['rgba(184,37,154,0.16)', 'rgba(184,37,154,0.16)']}
                style={{
                  height: height * 0.09,
                  borderRadius: 10,
                  borderColor: '#C01C8A',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1.5,
                  marginTop: 18,
                  elevation: 100,
                  width: width * 0.75,
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
                    fontFamily: Fonts.Montserrat,
                  }}>
                  Continue With Gmail
                </Text>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});

export default Signin;
