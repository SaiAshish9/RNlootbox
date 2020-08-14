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
        msg: null,
        token: action.payload.token,
      };

    case 'add_msg':
      return {
        ...state,
        msg: action.payload,
      };
    case 'signout':
      return {
        token: null,
        msg: null,
      };
    case 'remove_error':
      return {
        ...state,
        msg: null,
      };
    case 'verify':
      return {
        ...state,
      };
    case 'toggle_loading':
      return {
        ...state,
        loading: !state.loading,
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
      payload: {token},
    });
  }
};

const googleSignIn = (dispatch) => async () => {
  try {
    await GoogleSignin.configure();
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const {
      data: {
        data: {token},
      },
    } = await Api.post('app/user/check-google-user', {
      email: userInfo.displayName,
      is_google: 1,
    });
    if (token) {
      dispatch({
        type: 'signin',
        payload: {
          token,
        },
      });
      navigate({name: 'otp'});
      await AsyncStorage.setItem('token', token);
    }
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (err) {
    dispatch({
      type: 'add_msg',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signin = (dispatch) => async ({email, password}) => {
  try {
    dispatch({
      type: 'toggle_loading',
    });
    const res = await Api.post('app/user/login', {
      email,
      password,
    });
    if (res.data.data.token) {
      dispatch({
        type: 'signin',
        payload: {token: res.data.data.token},
      });
      await AsyncStorage.setItem('token', res.data.data.token);
      navigate({name: 'home'});
    }
    dispatch({
      type: 'toggle_loading',
    });
  } catch (e) {
    dispatch({
      type: 'add_msg',
      payload: 'Something went wrong with sign in',
    });
    dispatch({
      type: 'toggle_loading',
    });
  }
};

const verifyOtp = (dispatch) => async ({otp}) => {
  try {
    const user_id = await AsyncStorage.getItem('userId');
    const res = await Api.post('app/user/verify-otp', {
      user_id: parseInt(user_id),
      otp,
    });
    console.log(user_id, res.data.success, otp);
    if (res.data.success) {
      await AsyncStorage.setItem('userId', '');
      navigate({name: 'slider'});
    } else {
      dispatch({
        type: 'add_msg',
        payload: 'Invalid Otp',
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'add_msg',
      payload: 'OTP verification failed',
    });
  }
};

const signup = (dispatch) => async (data) => {
  try {
    dispatch({
      type: 'toggle_loading',
    });
    const res = await Api.post('app/user/register', data);
    if (res.data.data.is_otp_verified) {
      navigate({name: 'slider'});
    } else {
      await AsyncStorage.setItem('userId', res.data.data.user_id.toString());
      navigate({name: 'otp'});
    }
    dispatch({
      type: 'toggle_loading',
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'add_msg',
      payload: 'Something went wrong with sign up',
    });
    dispatch({
      type: 'toggle_loading',
    });
  }
};

const forgotPassword = (dispatch) => async (email) => {
  try {
    dispatch({
      type: 'toggle_loading',
    });
    const res = await Api.post('app/user/forgot-password', {email});
    if (res.data.success) {
      dispatch({
        type: 'add_msg',
        payload: res.data.message,
      });
      dispatch({
        type: 'toggle_loading',
      });
    } else {
      dispatch({
        type: 'add_msg',
        payload: 'Something went wrong',
      });
      dispatch({
        type: 'toggle_loading',
      });
    }
  } catch (e) {
    dispatch({
      type: 'add_msg',
      payload: 'Something went wrong',
    });
    dispatch({
      type: 'toggle_loading',
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
  navigate({name: 'language'});
};

const addError = (dispatch) => (msg) =>
  dispatch({type: 'add_msg', payload: msg});

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
    forgotPassword,
  },
  {
    token: null,
    msg: '',
    loading: false,
  },
);
