import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Input from '../components/input';
import DateTimePicker from '@react-native-community/datetimepicker';

const {width, height} = Dimensions.get('window');

const Profile = ({navigation}) => {
  const [value, setValue] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <ScrollView
      style={{
        width,
        height,
        overflow: 'hidden',
      }}>
      <View
        style={{
          backgroundColor: '#261D2A',
        }}>
        <ImageBackground
          source={require('../assets/dottedBackground.png')}
          style={{
            padding: width * 0.1,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('language');
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
              EDIT PROFILE
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
            John Doe
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
            Jondoe@gmail.com
          </Text>

          <View style={{marginVertical: 15}}>
            <Input placeholder="Email" email />
          </View>
          <View style={{marginVertical: 15}}>
            <Input placeholder="Password" password />
          </View>
          <View style={{marginVertical: 15}}>
     
              <Input
                onFocus={()=>{
                  setShow(true)
                }}
                value={value}
                placeholder={` Date of Birth : ${
                  value.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                  .replace(/ /g, '-')} `}
              />
          </View>
          <View style={{marginVertical: 15}}>
            <Input placeholder="Gender" />
          </View>
          <View style={{marginVertical: 15}}>
            <Input placeholder="Phone Number" tel />
          </View>
        </ImageBackground>

        {show && (
          <DateTimePicker
            testID="datetimepicker"
            value={value}
            mode="date"
            display="spinner"
            onChange={(e, x) => {
              setShow(false);
              setValue(x);
              console.log(x);
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
