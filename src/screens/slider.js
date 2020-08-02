import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const images = [
  require('../assets/img_1.png'),
  require('../assets/img_2.png'),
  require('../assets/img_3.png'),
];

export default class Slideshow extends React.Component {
  scrollX = new Animated.Value(0);

  render() {
    let position = Animated.divide(this.scrollX, width);
    const {navigation} = this.props;

    return (
      <View>
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: this.scrollX}}}],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={16}>
            {images.map((x, i) => {
              return (
                <View key={i}>
                  <ImageBackground
                    source={x}
                    style={{
                      width,
                      height,
                      backgroundColor: '#261D2A',
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      zIndex: 12,
                      bottom: height * 0.1,
                      width: width,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#ECDBFA',
                        marginLeft: width * 0.15,
                        fontFamily: 'Michroma Regular',
                        fontSize: 20,
                        lineHeight: 28,
                      }}>
                      Lorem ipsum dolor sit amet, consectetur{' '}
                    </Text>
                    <LinearGradient
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 0}}
                      colors={['#C01C8A', '#865CF4']}
                      style={{
                        height: height * 0.09,
                        borderRadius: 10,
                        alignSelf: 'center',
                        // marginLeft:width * 0.06,
                        marginTop: 25,
                        elevation: 100,
                        width: width * 0.75,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('home');
                        }}
                        style={{
                          width: '100%',
                          height: height * 0.09,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: '#fff',
                            letterSpacing: 0.5,
                            fontStyle: 'italic',
                          }}>
                          GET STARTED
                        </Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            top: 40,
            width: width,
            // left: width * 0.2,
          }}>
          {images.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.27, 1, 0.27],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 4,
                  width: width * 0.27,
                  backgroundColor: '#DF2EDC',
                  margin: 8,
                  borderRadius: 5,
                }}></Animated.View>
            );
          })}
        </View>
      </View>
    );
  }
}
