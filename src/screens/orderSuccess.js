import React from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const OrderSuccess = () => {
  return (
    <View
      style={{
        backgroundColor: '#261D2A',
      }}>
      <ImageBackground
        source={require('../assets/dottedBackground.png')}
        style={{
          width,
          height,
          overflow: 'hidden',
          paddingHorizontal: width * 0.2,
          paddingVertical: height * 0.15,
        }}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../assets/check.png')}
            style={{
              height: 48,
              width: 48,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontFamily: 'Michroma-Regular',
            fontSize: 20,
            color: '#ECDBFA',
          }}>
          Order
        </Text>
        <Text
          style={{
            fontFamily: 'Michroma-Regular',
            fontSize: 20,
            color: '#ECDBFA',
          }}>
          Success
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: 'rgba(255,255,255,0.27)',
            fontFamily: 'Montserrat-Regular',
            fontSize: 12,
          }}>
          Your order will be delivered between 48-72 Hours
        </Text>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {}}
          style={{
            width: '100%',
            height: height * 0.09,
            marginTop: height * 0.2,
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
              marginTop: height * 0.2,
              elevation: 100,
              width: width * 0.7,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                letterSpacing: 0.5,
                fontStyle: 'italic',
                fontFamily: 'Montserrat-Regular',
              }}>
              View Order
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default OrderSuccess;
