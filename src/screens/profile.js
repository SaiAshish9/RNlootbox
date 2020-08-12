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

import LinearGradient from 'react-native-linear-gradient';

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
                navigation.pop()
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

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
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
            </View>
            <Image
            // resizeMode="contain"
              source={{
                uri:
                  'https://images.unsplash.com/photo-1596913799254-c261205fe191?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60 ',
              }}
              style={{
                height: height * 0.12,
                width: width * 0.3,
                borderRadius: 10,
              }}
            />
          </View>

          <View style={{marginVertical: 15}}>
            <Input placeholder="Email" email />
          </View>
          <View style={{marginVertical: 15}}>
            <Input placeholder="Password" password />
          </View>
          <View style={{marginVertical: 15}}>
            <Input
              onFocus={() => {
                setShow(true);
              }}
              placeholder={`Date of Birth : ${
                value &&
                value
                  .toLocaleDateString('en', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                  .replace(/ /g, '-')
              }`}
            />
          </View>
          <View style={{marginVertical: 15}}>
            <Input placeholder="Gender" />
          </View>
          <View style={{marginVertical: 15}}>
            <Input placeholder="Phone Number" tel />
          </View>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(255,255,255,0.069)', 'rgba(255,255,255,0.003) ']}
            style={{
              width: width * 0.7,
              marginVertical: 15,
              height: height * 0.15,
              justifyContent: 'space-around',
              paddingLeft: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Address
              </Text>
              <TouchableOpacity onPress={() => {}} activeOpacity={0.4}>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Montserrat-Bold',
                    color: '#DF2EDC',
                    fontStyle: 'italic',
                  }}>
                  +Add More
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Montserrat-Bold',
                  color: '#ECDBFA',
                }}>
                Home
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                    color: '#ECDBFA',
                    opacity: 0.5,
                  }}>
                  0765 Gutkowski Land
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                  color: '#ECDBFA',
                  opacity: 0.5,
                }}>
                Office
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                    color: '#ECDBFA',
                    opacity: 0.5,
                  }}>
                  110 Runte Ford
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <TouchableWithoutFeedback
            onPress={() => {}}
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
                width: width * 0.8,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  letterSpacing: 0.5,
                  fontStyle: 'italic',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Save
              </Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </ImageBackground>

        {show && (
          <DateTimePicker
            testID="datetimepicker"
            value={value}
            mode="date"
            display="spinner"
            onChange={(e, x) => {
              setShow(false);
              if (x) setValue(x);
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
