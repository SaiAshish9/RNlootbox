import React from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Btn from './btn';

const {width, height} = Dimensions.get('window');

const performanceDetails = [
  {
    text: '# of Cores',
    desc: '8',
  },
  {
    text: '# of Threads',
    desc: '8',
  },
  {
    text: 'Processor Base Frequency',
    desc: '3.6 GHz',
  },
  {
    text: 'Max Turbo Frequency',
    desc: '4.9 GHz',
  },
  {
    text: 'Cache',
    desc: '12 MB Intel® Smart Cache',
  },
];

const processorDetails = [
  {
    text: 'Processor Graphics',
    desc: 'Intel® UHD Graphics 630',
  },
  {
    text: 'Graphics Base Frequency',
    desc: '350 MHz',
  },
  {
    text: 'Processor Base Frequency',
    desc: '3.6 GHz',
  },
  {
    text: 'Graphics Max Dynamic Frequency',
    desc: '64 GB',
  },
];

const data = [performanceDetails, processorDetails];

const ItemDesc = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width,
        height,
        overflowX: 'hidden',
        backgroundColor: '#261D2A'
      }}>
      <ImageBackground
        source={require('../assets/dottedBackground.png')}
        style={{
          width,
          padding: width * 0.1,
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Image
              resizeMode="contain"
              source={require('../assets/back.png')}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Image
                resizeMode="contain"
                source={require('../assets/ic_cart2.png')}
                style={{width: 40}}
              />
            </TouchableOpacity>

            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#C01C8A', '#865CF4']}
              style={{
                width: 16,
                height: 16,
                position: 'absolute',
                right: -4,
                top: -1,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Bold',
                }}>
                2
              </Text>
            </LinearGradient>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: height * 0.05,
          }}>
          <Image
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2015/03/21/06/27/technology-683243_960_720.png',
            }}
            style={{
              height: 126,
              width: 126,
              marginRight: width * 0.05,
            }}
          />
          <View>
            <Text
              style={{
                color: '#ECDBFA',
                fontSize: 20,
                fontFamily: 'Michroma-Regular',
              }}>
              i7 6469k
            </Text>
            <Text
              style={{
                color: '#ECDBFA',
                fontSize: 14,
                opacity: 0.5,
                fontFamily: 'Michroma-Regular',
              }}>
              Intel
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Michroma-Regular',
              color: '#ECDBFA',
              opacity: 0.5,
            }}>
            Price
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Michroma-Regular',
              color: '#ECDBFA',
            }}>
            KD 2,000
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Michroma-Regular',
              color: '#ECDBFA',
              opacity: 0.5,
            }}>
            Qty
          </Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../assets/ic_sub.png')}
                resizeMode="contain"
                style={{
                  width: 38,
                  height: 24,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Michroma-Regular',
                color: '#ECDBFA',
                marginHorizontal: 10,
              }}>
              2
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../assets/ic_add.png')}
                resizeMode="contain"
                style={{
                  width: 38,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Michroma-Regular',
            color: '#ECDBFA',
            opacity: 0.5,
            marginTop: 20,
          }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Montserrat-Regular',
            color: 'rgba(236,219,250,0.5)',
            marginTop: 10,
          }}>
          Nulla ut mollis nisi. Nullam consequat euismod tellus volutpat
          sodales. In mauris elit, hendrerit ut pharetra hendrerit, viverra nec{' '}
          <Text
            style={{
              color: '#ECDBFA',
              fontFamily: 'Montserrat-Bold',
            }}>
            ...more
          </Text>
        </Text>

        {data.map((i, k) => (
          <LinearGradient
            key={k}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(255,255,255,0.069)', 'rgba(255,255,255,0.003) ']}
            style={[
              {
                borderRadius: 10,
                marginTop: 27,
                width: width * 0.8,
              },
            ]}>
            <View
              style={{
                width: '100%',
                height: height * 0.07,
                display: 'flex',
                justifyContent: 'center',
                borderBottomColor: 'rgba(151,151,151,0.12)',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  marginLeft: '7%',
                  fontFamily: 'Montserrat-Regular',
                  color: '#ECDBFA',
                  fontSize: 14,
                }}>
                {k === 0 ? 'Performance' : 'Processor Graphics'}
              </Text>
            </View>
            <View
              style={{
                padding: '7%',
                width: '100%',
              }}>
              {i.map((a, b) => (
                <View
                  key={b}
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginVertical: 10,
                    display: 'flex',
                  }}>
                  <Text
                    style={{
                      width: '50%',
                      color: '#ECDBFA',
                      fontSize: 12,
                      fontFamily: 'Montserrat-Regular',
                      opacity: 0.5,
                    }}>
                    {a.text}
                  </Text>
                  <Text
                    style={{
                      width: '50%',
                      color: '#ECDBFA',
                      fontSize: 12,
                      fontFamily: 'Montserrat-Regular',
                      opacity: 0.5,
                      textAlign: 'right',
                      paddingLeft:20
                    }}>
                    {a.desc}
                  </Text>
                </View>
              ))}
            </View>
          </LinearGradient>
        ))}

        <TouchableOpacity onPress={() => {}}>
          <Btn text="ADD TO CART" />
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default ItemDesc;
