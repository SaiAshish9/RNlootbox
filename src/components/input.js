import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
import {Fonts} from '../utils/Fonts';


const Input = ({placeholder, password, email, tel, style, otp, inpStyle}) => (
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
        height: height * 0.1,
        width: width * 0.75,
      },
      style,
    ]}>
    <TextInput
      secureTextEntry={password}
      placeholder={placeholder}
      placeholderTextColor="#ECDBFA"
      autoCompleteType={'off'}
      maxLength={otp && 1}
      keyboardType={email ? 'email-address' : tel ? 'phone-pad' : 'default'}
      style={[styles.inp, inpStyle]}
    />
  </LinearGradient>
);

const styles = StyleSheet.create({
  inp: {
    paddingLeft: 20,
    fontSize: 12,
    fontFamily: Fonts.Montserrat,

    width: width * 0.7,
    color: '#ECDBFA',
  },
});

export default Input;
