import React from 'react';

import {View, StyleSheet, Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {


  return (
    <View>
      <LinearGradient
        colors={['#2A2D39', '#261D2A']}
        style={{
          width: width,
          height: height,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Image
          source={require('./src/assets/launch_screen.png')}
          resizeMode="contain"
          style={{
            width: 200,
          }}
        /> */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
