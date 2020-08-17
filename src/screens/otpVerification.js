import React, {useContext, useState, useEffect} from 'react';

import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Context as AuthContext} from '../api/contexts/authContext';
import OtpInput from '../components/otp';
import Modal from '../components/modal';

const {height, width} = Dimensions.get('window');

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState();
  const {verifyOtp, state, resendOtp} = useContext(AuthContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer;
    if (count < 60 && count >= 0) {
      timer = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else if (count <= 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [count]);

  return (
    <LinearGradient
      colors={['#2A2D39', '#261D2A']}
      style={{
        width: width,
        minHeight: height,
        overflowX: 'hidden',
      }}>
      {state.msg ? <Modal msg={state.msg} hideBtn /> : null}
      <ImageBackground
        style={{
          height: height,
          width: width,
          overflowX: 'hidden',
          padding: width * 0.1,
        }}
        source={require('../assets/dottedBackground.png')}>
        <View
          style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{width: 48}}
              resizeMode="contain"
              source={require('../assets/back.png')}
            />
          </TouchableOpacity> */}
          {/* <Text
            style={{
              fontStyle: 'italic',
              fontSize: 12,
              color: '#ECDBFA',
              marginLeft: 10,
            }}>
            VERIFY OTP
          </Text> */}
        </View>
        <Text
          style={{
            fontSize: 24,
            color: '#ECDBFA',
            lineHeight: 28,
            marginTop:20
          }}>
          Verification OTP sent to your mobile number
        </Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <OtpInput otp={otp} setOtp={setOtp} />
        </View>
        <Text
          style={{
            marginTop: 20,
            color: '#ECDBFA',
            fontSize: 12,
          }}>
          {count === 60
            ? '01:00'
            : count <= 50
            ? `0:${60 - count}`
            : `0:0${60 - count}`}
        </Text>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#C01C8A', '#865CF4']}
          style={{
            height: height * 0.09,
            borderRadius: 10,
            //   alignSelf: 'flex-end',
            position: 'absolute',
            left: 0.125 * width,
            bottom: height * 0.09,
            marginTop: 25,
            elevation: 100,
            width: width * 0.75,
          }}>
          <TouchableOpacity
            onPress={async () => {
              if (count === 60) {
                const res = await resendOtp();
                if (res) {
                  setCount(0);
                } else {
                  setCount(60);
                }
              }
              if (count !== 0 && count !== 60) {
                await verifyOtp({otp});
              }
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
              {count === 60 ? 'RESEND OTP' : 'VERIFY'}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Otp;
