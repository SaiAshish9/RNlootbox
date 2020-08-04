import createDataContext from './createDataContext';
import Api from '../index';
import {navigate} from './navigationRef';
import AsyncStorage from '@react-native-community/async-storage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        ...state,
        error_msg: null,
        token: action.payload,
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
    default:
      return state;
  }
};

const checkUser = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token && token.length > 0) {
    dispatch({
      type: 'signin',
      payload: token,
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
        payload: res.data.data.token,
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
    const res = await Api.post('app/user/verify-otp', {
      user_id,
      otp,
    });
    console.log(res);
    dispatch({
      type: 'verify_otp',
    });
    navigate({name: 'home'});
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
  },
  {
    token: null,
    error_msg: '',
    otp_verified: false,
  },
);
