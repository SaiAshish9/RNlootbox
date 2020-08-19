import React from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import GradientCircle from '../components/gradientCircle';

const {width, height} = Dimensions.get('window');

const options = [
  require('../assets/back.png'),
  require('../assets/ic_cart2.png'),
  require('../assets/ic_filter.png'),
  require('../assets/ic_search.png'),
];

const categories = ['PC Parts', 'Gaming Accessories', 'Gears'];

const subCategories = ['All', 'CPU', 'GPU', 'Mouse', 'Keyboard'];

const LootStore = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#261D2A',
        width: width,
        // minHeight: height * 0.2,
        overflowX: 'hidden',
      }}>
      <ImageBackground
        source={require('../assets/dottedBackground.png')}
        style={{
          width,
          height,
          //   overflow: 'hidden',
          paddingHorizontal: width * 0.1,
        //   paddingVertical: height * 0.05,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: width * 0.8,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {options.map(
              (i, k) =>
                k === 0 && (
                  <TouchableOpacity
                    key={k}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Image
                      resizeMode="contain"
                      source={i}
                      style={{
                        width: 48,
                      }}
                    />
                  </TouchableOpacity>
                ),
            )}
            <View
              style={{
                width: '54%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {options.map(
                (i, k) =>
                  k !== 0 && (
                    <TouchableOpacity key={k} onPress={() => {}}>
                      <Image
                        resizeMode="contain"
                        source={i}
                        style={{
                          width: 48,
                        }}
                      />
                    </TouchableOpacity>
                  ),
              )}
            </View>
          </View>
          <Text
            style={{
              color: '#ECDBFA',
              fontSize: 12,
              lineHeight: 16,
            }}>
            DISCOVER
          </Text>
          <Text
            style={{
              color: '#ECDBFA',
              fontSize: 20,
              fontFamily: 'Michroma-Regular',
            }}>
            Loot Store
          </Text>

          <ScrollView
            style={{
              marginTop: 27,
              height: height * 0.1,
            }}
            contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}
            showsVerticalScrollIndicator={false}
            horizontal>
            {categories.map((i, k) => (
              <TouchableOpacity key={k} onPress={() => {}}>
                {k === 0 && (
                  <GradientCircle
                    style={{
                      position: 'absolute',
                    }}
                  />
                )}
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Bold',
                    //   lineHeight: 16,
                    color: '#ECDBFA',
                    opacity: k === 0 ? 1 : 0.4,
                    marginLeft: k === 0 ? 10 : 0,
                  }}>
                  {i}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={{width: '100%'}}>
            <ScrollView
              contentContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              showsHorizontalScrollIndicator={false}
              horizontal>
              {subCategories.map((i, k) => (
                <TouchableOpacity
                  style={{
                    marginRight: 30,
                  }}
                  key={k}
                  onPress={() => {}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Montserrat-Bold',
                      lineHeight: 16,
                      color: '#ECDBFA',
                      opacity: k === 0 ? 1 : 0.4,
                    }}>
                    {i}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View
            style={{
              display: 'flex',
              marginVertical: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            {[...Array(6).keys()].map((i, k) => (
              <ImageBackground
                key={k}
                source={require('../assets/ic_card_b0.png')}
                resizeMode="contain"
                style={{
                  height: 170,
                  display: 'flex',
                  //   alignItems: 'center',
                  // justifyContent: 'center',
                  padding: 20,
                  width: width * 0.36,
                  marginVertical:10,
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../assets/mouse.png')}
                  style={{
                    width: 97,
                    height:79,
                    position: 'absolute',
                    top:-30,
                    left:'30%'
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    color: '#D2D7F9',
                    opacity: 0.5,
                    fontSize: 14,
                    marginTop: 60,
                  }}>
                  Intel
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ECDBFA',
                    fontFamily: 'Montserrat-Bold',
                  }}>
                  i7 6469k
                </Text>
                <Text
                  style={{
                    color: '#DF2EDC',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  KD 2,200
                </Text>
              </ImageBackground>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default LootStore;
