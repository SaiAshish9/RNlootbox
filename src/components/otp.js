import React, {useRef, useState} from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const GradientWrapper = ({children}) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={['rgba(255,255,255,0.069)', 'rgba(255,255,255,0.003) ']}
    style={[
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: width * 0.15,
        height: height * 0.09,
        textAlign: 'center',
      },
    ]}>
    {children}
  </LinearGradient>
);

const Otp = ({otp, setOtp}) => {
  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();
  const pins = [pin1ref, pin2ref, pin3ref, pin4ref];
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const x = [a, b, c, d];
  // const navigation = useNavigation();
  const [direction, setDirection] = useState('forward');
  const [track, setTrack] = useState([]);

  return (
    <>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          returnKeyType="next"
          ref={pin1ref}
          maxLength={1}
          onChangeText={(value) => {
            setA(value);
            if (value.length === 1 && b.length === 0) {
              pin2ref.current.focus();
            }
          }}
          onSubmitEditing={() => {
            pin2ref.current.focus();
          }}
          autoCapitalize="none"
          blurOnSubmit={true}
          autoCorrect={false}
          keyboardType="phone-pad"
          style={styles.inp}
        />
      </GradientWrapper>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          returnKeyType="next"
          ref={pin2ref}
          onSubmitEditing={() => {
            pin3ref.current.focus();
          }}
          onKeyPress={() => {
            if (b.length === 1) {
              if (!track.includes(2)) {
                setTrack([...track, 2]);
              } else {
                pin1ref.current.focus();
                setTrack(track.filter((x) => x !== 2));
              }
            } else {
              pin1ref.current.focus();
            }
          }}
          onChangeText={(value) => {
            setB(value);
            if (value.length === 1 && c.length === 0) pin3ref.current.focus();
          }}
          maxLength={1}
          autoCapitalize="none"
          blurOnSubmit={true}
          autoCorrect={false}
          keyboardType="phone-pad"
          style={styles.inp}
        />
      </GradientWrapper>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          returnKeyType="next"
          ref={pin3ref}
          onSubmitEditing={() => {
            pin4ref.current.focus();
          }}
          onChangeText={(value) => {
            setC(value);
            if (value.length === 1 && d.length === 0 && direction === 'forward')
              pin4ref.current.focus();
          }}
          onKeyPress={() => {
            if (c.length === 1) {
              if (!track.includes(3)) {
                setTrack([...track, 3]);
              } else {
                pin2ref.current.focus();
                setTrack(track.filter((x) => x !== 3));
              }
            } else {
              pin2ref.current.focus();
            }
          }}
          maxLength={1}
          autoCapitalize="none"
          blurOnSubmit={true}
          autoCorrect={false}
          keyboardType="phone-pad"
          style={styles.inp}
        />
      </GradientWrapper>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          maxLength={1}
          ref={pin4ref}
          autoCapitalize="none"
          blurOnSubmit={true}
          autoCorrect={false}
          keyboardType="phone-pad"
          onKeyPress={() => {
            if (d.length === 1) {
              if (!track.includes(4)) {
                setTrack([...track, 4]);
              } else {
                pin3ref.current.focus();
                setTrack(track.filter((x) => x !== 4));
              }
            } else {
              pin3ref.current.focus();
            }
          }}
          onChangeText={(value)=>{
            setD(value)
            if(value && value.length === 1){
              setOtp(+`${a}${b}${c}${value}`)
            }
          }}
          onSubmitEditing={() => {
            setOtp(+`${a}${b}${c}${d}`);
            // navigation.replace('slider');
          }}
          style={styles.inp}
        />
      </GradientWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  inp: {
    paddingLeft: 20,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    width: '100%',
    color: '#ECDBFA',
  },
});

export default Otp;
