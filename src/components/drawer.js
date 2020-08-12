import React,{useContext} from 'react';
import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {useIsDrawerOpen} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {Context as AuthContext}  from '../api/contexts/authContext'

const {width, height} = Dimensions.get('window');
const options = [
  {
    name: 'My Cart',
    path: 'home',
  },
  {
    name: 'My Orders',
    path: 'orderSuccess',
  },
  {
    name: "FAQ's",
    path: 'home',
  },
  {
    name: 'Contact Us',
    path: 'contact',
  },
  {
    name: 'Log Out',
    path: '',
  },
];

const Drawer = ({navigation, progress}) => {

  const {signout} = useContext(AuthContext)
  const isDrawerOpen=useIsDrawerOpen()
  

  return (
    <Animatable.View
      animation={isDrawerOpen ? 'fadeIn':'fadeOut'}
      delay={900}
      >
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#2A2D39', '#261D2A']}
        style={styles.gradient}>
        <View
          style={{
            display: 'flex',
            width: width * 0.5,
            height,
            paddingLeft: width * 0.1,
            paddingVertical: width * 0.1,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('profile')
            }}
            style={{
              marginTop: 18,
              width: width * 0.3,
              borderRadius: 7,
              borderColor: '#C01C8A',
              borderWidth: 1.5,
              height: height * 0.045,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(184,37,154,0.1)',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontStyle: 'italic',
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <View
            style={{
              borderColor: '#DF2EDC',
              backgroundColor: '#DF2EDC',
              borderRadius: 11,
              borderWidth: 2,
              height: 70,
              width: 70,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: height * 0.1,
              marginBottom: height * 0.02,
            }}>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR861VGFylgAJKnC4o90ssB-_ZIcLQi6075ig&usqp=CAU',
              }}
              style={{
                borderRadius: 11,
                height: 64,
                width: 64,
              }}
            />
          </View>

          <Text
            style={{
              fontFamily: 'Michroma-Regular',
              fontSize: 16,
              lineHeight: 27.2,
              color: '#ECDBFA',
            }}>
            John Doe
          </Text>

          <Text
            style={{
              fontFamily: 'Futura-Medium',
              fontSize: 12,
              lineHeight: 16,
              color: '#ECDBFA',
              opacity: 0.32,
              marginBottom: height * 0.1,
            }}>
            Johndoe@gmail.com
          </Text>

          {options.map((i, k) => (
            <TouchableOpacity key={k} onPress={() => {
              k===options.length-1 ? signout():navigation.push(i.path)
            }}>
              <Text
                style={{
                  color: '#ECDBFA',
                  fontSize: 14,
                  lineHeight: 16,
                  fontFamily: 'Montserrat-Medium',
                  marginVertical: height * 0.02,
                }}>
                {i.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={{
            width: width * 0.5,
            height: height * 0.9,
            position: 'absolute',
            right: 0,
            top: height * 0.05,
            // alignSelf: 'flex-end'
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <ImageBackground
            source={require('../assets/menuImage.png')}
            style={{
              width: width * 0.5,
              height: height * 0.9,

              // alignSelf: 'flex-end'
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height,
    width,
    overflow: 'hidden',
    display: 'flex',
    // flexDirection: 'row',
  },
});

export default Drawer;
