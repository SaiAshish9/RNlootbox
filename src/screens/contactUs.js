import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import Input from '../components/input';

const {width, height} = Dimensions.get('window');

const ContactUs = ({navigation}) => {
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
          padding: width * 0.1,
        }}>
        <View
          style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Image
              style={{width: 48}}
              resizeMode="contain"
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 16,
              lineHeight: 16,
              opacity: 0.4,
              color: '#ECDBFA',
              marginLeft: 10,
              fontFamily: 'Montserrat-Italic',
            }}>
            CONTACT US
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'Michroma-Regular',
            fontSize: 20,
            lineHeight: 28,
            color: '#ECDBFA',
            marginBottom: 10,
          }}>
          Need Our Help?
        </Text>

        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 12,
            lineHeight: 16,
            color: '#ECDBFA',
            opacity: 0.5,
            marginBottom: 20,
          }}>
          Contact us through
        </Text>

        <View style={{marginVertical: 15}}>
          <Input
            placeholder="FAQ's"
            multiline
            style={{
              height: height * 0.15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input placeholder="Email" email />
        </View>
        <View style={{marginVertical: 15}}>
          <Input placeholder="Whatsapp" tel />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactUs;
