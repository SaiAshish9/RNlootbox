import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Easing} from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
  // CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Language from './src/screens/language';
import OtpVerification from './src/screens/otpVerification';
import Slider from './src/screens/slider'
import Home from './src/screens/home'
import {Dimensions,View} from 'react-native'

const {width}=Dimensions.get('window')

const Stack = createStackNavigator();
const Auth = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const AuthScreen = () => (
  <Auth.Navigator
    initialRouteName="signin"
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      ...TransitionPresets.SlideFromRightIOS,
      // ...TransitionPresets.FadeFromBottom
      // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
      // forFadeBottomFromAndroid
    }}
    headerMode="none">
    <Auth.Screen name="signin" component={Signin} />
    <Auth.Screen name="signup" component={Signup} />
  </Auth.Navigator>
);

const Drawer=createDrawerNavigator()

const CustomDrawerContent=({navigation})=>(
  <View></View>
)

const HomeScreen=()=>(
  <Drawer.Navigator
  drawerStyle={{
    backgroundColor:'#000',
    width:width
  }}
  drawerContent={(props)=><CustomDrawerContent {...props} />}
  drawerType="slide"
  overlayColor="transparent"
  initialRouteName="home">
     <Drawer.Screen name="home"  component={Home} />
  </Drawer.Navigator>
)


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          transitionSpec: {
            open: closeConfig,
            close: closeConfig,
          },
        }}
        initialRouteName="language"
        headerMode="none">
        <Stack.Screen name="language" component={Language} />
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="otp" component={OtpVerification}/>
        <Stack.Screen name="slider" component={Slider} />
        <Stack.Screen name="home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
