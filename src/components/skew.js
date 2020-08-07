import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.triangleCorner}></View>
        <View style={styles.triangleCornerLayer}></View>
        <View style={styles.triangleCorner1}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor:
  },
  triangleCorner: {
    position: 'absolute',
    top: 105,
    left: 0,
    width: 300,
    height: 100,
    // backgroundColor: 'transparent',
    // borderStyle: 'solid',
    borderRightWidth: 50,
    borderTopWidth: 80,
    borderRightColor: 'transparent',
    // borderTopColor: 'gray',
    borderRadius: 20,
  },
  triangleCorner1: {
    position: 'absolute',
    top: 100,
    left: 0,
    // width: 130,
    // backgroundColor: 'transparent',
    borderStyle: 'solid',
    // borderRadius: 20,
    backgroundColor: '#fff',
    // borderRightWidth: 50,
    // borderTopWidth: 90,
    borderRightColor: 'transparent',
    // borderTopColor: 'transparent',
  },
  triangleCornerLayer: {
    position: 'absolute',
    top: 107,
    left: 0,
    width: 297,
    height: 100,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 47,
    borderLeftWidth: 47,
    borderTopWidth: 75,
    borderRadius: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
});
