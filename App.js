import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Easing} from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from './main';
import Splash from './SplashScreen';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';

const Stack = createStackNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute="splash"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          ...TransitionPresets.SlideFromRightIOS
          // ...TransitionPresets.FadeFromBottom
          // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          // forFadeBottomFromAndroid
        }}
        headerMode="none">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen
          name="signin"
          component={Signin}

          // options={{

          // }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={
            {
              // gestureEnabled: true,
              // gestureDirection: 'horizontal',
            }
          }
        />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
