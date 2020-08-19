import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Easing} from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
  // CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Language from './src/screens/language';
import OtpVerification from './src/screens/otpVerification';
import Slider from './src/screens/slider';
import Home from './src/screens/home';
import CustomDrawerContent from './src/components/drawer';
import {Dimensions, View, StatusBar} from 'react-native';
import {Provider as AuthProvider} from './src/api/contexts/authContext';
import {setNavigator} from './src/api/contexts/navigationRef';
import RNBootSplash from 'react-native-bootsplash';
import {Context as AuthContext} from './src/api/contexts/authContext';
import BuildYourPc from './src/screens/buildYourPc';
import ContactUs from './src/screens/contactUs';
import Profile from './src/screens/profile';
import OrderSuccess from './src/screens/orderSuccess';
import Notifications from './src/screens/notifications';
import ItemDesc from './src/screens/itemDesc';
import ForgotPassword from './src/screens/forgotPassword';
import LootStore from './src/screens/lootStore'

const {width, height} = Dimensions.get('window');

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

const AuthScreen = ({navigation}) => {
  return (
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
};
const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: '#261D2A',
      width: width,
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerType="slide"
    overlayColor="transparent"
    initialRouteName="home">
    <Drawer.Screen name="home" component={Home} />
  </Drawer.Navigator>
);

const App = () => {
  const {checkUser} = useContext(AuthContext);

  const check = async () => {
    RNBootSplash.show();
    await checkUser();
    await RNBootSplash.hide({duration: 250});
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <View
      style={{
        width,
        height,
        backgroundColor: '#261D2A',
      }}>
      <NavigationContainer
        ref={(navigator) => {
          setNavigator(navigator);
        }}>
        <Stack.Navigator
          screenOptions={{
            transitionSpec: {
              open: closeConfig,
              close: closeConfig,
            },
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}
          initialRouteName="language"
          headerMode="none">
          <Stack.Screen name="language" component={Language} />
          <Stack.Screen name="auth" component={AuthScreen} />
          <Stack.Screen name="otp" component={OtpVerification} />
          <Stack.Screen name="slider" component={Slider} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="buildYourPc" component={BuildYourPc} />
          <Stack.Screen name="contact" component={ContactUs} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="orderSuccess" component={OrderSuccess} />
          <Stack.Screen name="notifications" component={Notifications} />
          <Stack.Screen name="itemDesc" component={ItemDesc} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
          <Stack.Screen name="lootStore" component={LootStore} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
