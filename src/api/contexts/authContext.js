import createDataContext from './createDataContext';
import Api from '../index';
import {navigate} from './navigationRef';
import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin} from '@react-native-community/google-signin';

const reducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        ...state,
        error_msg: null,
        token: action.payload.token,
        otp_verified: action.payload.verified === 'yes' ? true : false,
      };

    case 'add_error':
      return {
        ...state,
        error_msg: action.payload,
      };
    case 'signout':
      return {
        otp_verified: false,
        token: null,
        error_msg: null,
      };
    case 'remove_error':
      return {
        ...state,
        error_msg: null,
      };
    case 'verify':
      return {
        ...state,
        otp_verified: true,
      };
    default:
      return state;
  }
};

const checkUser = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  const verified = await AsyncStorage.getItem('verified');
  if (token && token.length > 0) {
    dispatch({
      type: 'signin',
      payload: {token, verified},
    });
  }
};

const googleSignIn = (dispatch) => async () => {
  try {
    await GoogleSignin.configure();
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const {data:{data:{token}}} = await Api.post('app/user/check-google-user', {
      email:userInfo.displayName,
      is_google: 1,
    });
   if(token){
     dispatch({
       type: 'signin',
       payload: {
         token,
         verified: 'no',
       },
     });
     navigate({name:'otp'})
    await AsyncStorage.setItem('token', token);
   }
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signin = (dispatch) => async ({email, password}) => {
  try {
    const res = await Api.post('app/user/login', {
      email,
      password,
    });
    if (res.data.data.token) {
      dispatch({
        type: 'signin',
        payload: {token: res.data.data.token, verified: 'no'},
      });
      navigate({name: 'otp', params: {}});
      await AsyncStorage.setItem('token', res.data.data.token);
    }
  } catch (e) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const verifyOtp = (dispatch) => async ({user_id, otp}) => {
  try {
    // const res = await Api.post('app/user/verify-otp', {
    //   user_id,
    //   otp,
    // });
    // console.log(res);
    // if (otp == 1234) {
    await AsyncStorage.setItem('verified', 'yes');
    dispatch({
      type: 'verify',
    });
    navigate({name: 'slider'});
    // }
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'add_error',
      payload: 'OTP verification failed',
    });
  }
};

const signup = (dispatch) => async (data) => {
  try {
    const res = await Api.post('app/user/register', data);
    await AsyncStorage.setItem('verified', 'no');
    console.log(res);
    navigate({name: 'otp'});
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.setItem('verified', 'no');
  dispatch({type: 'signout'});
  navigate({name: 'language'});
};

const addError = (dispatch) => (msg) =>
  dispatch({type: 'add_error', payload: msg});

const removeError = (dispatch) => () => dispatch({type: 'remove_error'});

export const {Context, Provider} = createDataContext(
  reducer,
  {
    signin,
    signup,
    removeError,
    signout,
    checkUser,
    verifyOtp,
    addError,
    googleSignIn,
  },
  {
    token: null,
    error_msg: '',
    otp_verified: false,
  },
);
