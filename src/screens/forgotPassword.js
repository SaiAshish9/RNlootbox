import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import Logo from '../assets/launch_screen.png';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/input';
import {Fonts} from '../utils/Fonts';
import {Context as AuthContext} from '../api/contexts/authContext';
import Modal from '../components/modal';

const {height, width} = Dimensions.get('window');

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const {state, forgotPassword, setValidationError} = useContext(AuthContext);

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
                marginTop: width * 0.21,
                marginBottom: height * 0.04,
              }}
            />

            {state.msg ? (
              <Modal msg={state.msg} hideBtn />
            ) : state.validationError ? (
              <Modal msg={state.validationError} />
            ) : null}
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={50}
              style={styles.screen}>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                email
              />
            </KeyboardAvoidingView>

            <TouchableOpacity
              onPress={() => {
                if (!email) {
                  setValidationError('Email Address Is Required');
                }
                if (
                  email &&
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                ) {
                  setValidationError(' Invalid Email Address');
                }
                if (
                  email &&
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                ) {
                  forgotPassword(email);
                }
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
                  marginTop: height * 0.07,
                  borderRadius: 10,
                  display: 'flex',
                  height: height * 0.09,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //   elevation: 100,
                  width: width * 0.75,
                }}>
                {!state.loading ? (
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#fff',
                      letterSpacing: 0.5,
                      fontStyle: 'italic',
                      fontFamily: Fonts.Montserrat,
                    }}>
                    SUBMIT
                  </Text>
                ) : (
                  <ActivityIndicator color="#ECDBFA" size="small" />
                )}
              </LinearGradient>
            </TouchableOpacity>

            <Text
              style={{
                // alignSelf: 'flex-end',
                marginTop: height * 0.05,
                marginBottom: height * 0.05,
                color: 'rgba(236,219,250,0.5)',
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}>
              If you do have a password{' '}
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.push('auth');
                }}>
                <Text
                  style={{
                    color: '#ECDBFA',
                    fontSize: 12,
                    top: 3,
                    fontFamily: 'Montserrat-Bold',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </Text>
          </SafeAreaView>
        </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ForgotPassword;
