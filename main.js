import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';

import BackBtn from './src/assets/back.png';

import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const App = () => {
  return (
    <LinearGradient
      colors={['#2A2D39', '#261D2A']}
      style={{
        width: width,
        minHeight: height,
        overflowX: 'hidden',
        padding: 10,
      }}>
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 40,
          }}>
          <TouchableOpacity>
            <Image
              source={BackBtn}
              style={{
                height: 32,
                width: 48,
                marginLeft: 20,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontStyle: 'italic',
                fontWeight: 'normal',
                color: '#fff',
                opacity: 0.3,
                lineHeight: 16,
              }}>
              PACKAGES
            </Text>
          </View>
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(255,255,255,0.13)', 'rgba(255, 255, 255,0)']}
          style={{
            height: height * 0.3,
            width: width * 0.8,
            marginLeft: width * 0.08,
            borderRadius: 10,
          }}></LinearGradient>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default App;
