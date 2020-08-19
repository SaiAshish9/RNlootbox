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
    case 'validation_error':
      return {
        ...state,
        validationError: action.payload,
      };
    case 'language':
      return {
        ...state,
        language: action.payload,
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
  } else {
    // const userId = await AsyncStorage.getItem('userId');
    // if (userId && userId.length > 0) {
    // navigate({name: 'otp'});
    // }else {
    const language = await AsyncStorage.getItem('language');
    if (language) {
      navigate({name: 'auth'});
    } else {
      navigate({name: 'language'});
    }
    // }
  }
};

const googleSignIn = (dispatch) => async () => {
  try {
    await GoogleSignin.configure();
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const email = userInfo.user.email;
    const firstName = userInfo.user.givenName;
    const lastName = userInfo.user.familyName;
    const {
      data: {data},
    } = await Api.post('app/user/check-google-user', {
      // email:'sanjiv@gmail.com',
      email,
      is_google: 1,
    });
    if (data.is_available_user !== undefined) {
      navigate({
        name: 'signup',
        params: {
          email,
          firstName,
          lastName,
        },
      });
    } else if (data.token) {
      dispatch({
        type: 'signin',
        payload: {
          token: data.token,
        },
      });
      await AsyncStorage.setItem('token', data.token);
      navigate({name: 'home'});
    } else if (data.is_otp_verified === false) {
      await AsyncStorage.setItem('userId', data.user_id.toString());
      await navigate({name: 'otp'});
      dispatch({
        type: 'add_msg',
        payload:
          'OTP not verified yet.We sent you an otp.Please verify it first !',
      });
    } else {
      dispatch({
        type: 'add_msg',
        payload: 'Something went wrong ',
      });
    }
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (err) {
    // dispatch({
    //   type: 'add_msg',
    //   payload: 'Something went wrong ',
    // });
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
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
    } else if (res.data.data.is_otp_verified === false) {
      await AsyncStorage.setItem('userId', res.data.data.user_id.toString());
      await navigate({name: 'otp'});
      dispatch({
        type: 'add_msg',
        payload:
          'OTP not verified yet.We sent you an otp.Please verify it first !',
      });
    }
    dispatch({
      type: 'toggle_loading',
    });
  } catch (e) {
    dispatch({
      type: 'add_msg',
      payload: 'These credentials do not match our records.',
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
        payload: 'Invalid OTP',
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'add_msg',
      payload: 'Invalid OTP',
    });
  }
};

const resendOtp = (dispatch) => async () => {
  try {
    const user_id = await AsyncStorage.getItem('userId');
    const res = await Api.post('app/user/resend-otp', {
      user_id: parseInt(user_id),
    });
    console.log(res.data.success);
    if (res.data.success) {
      dispatch({
        type: 'add_msg',
        payload: 'OTP send successfully',
      });
      return true;
    } else {
      dispatch({
        type: 'add_msg',
        payload: 'OTP not sent',
      });
      return false;
    }
  } catch (e) {
    dispatch({
      type: 'add_msg',
      payload: 'Some error occurred',
    });
    return false;
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
    // console.log(e.message);
    dispatch({
      type: 'add_msg',
      payload: 'User with that email or password already exists',
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
    console.log(res.data);
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
        payload: 'The selected email is invalid',
      });
      dispatch({
        type: 'toggle_loading',
      });
    }
  } catch (e) {
    dispatch({
      type: 'add_msg',
      payload: 'The selected email is invalid',
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

const setValidationError = (dispatch) => (msg) => {
  dispatch({type: 'validation_error', payload: msg});
  console.log(msg);
};

const setLanguage = (dispatch) => async (language) => {
  await AsyncStorage.setItem('language', language);
  dispatch({type: 'language', payload: language});
};

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
    resendOtp,
    addError,
    setLanguage,
    googleSignIn,
    setValidationError,
    forgotPassword,
  },
  {
    token: null,
    msg: '',
    loading: false,
    validationError: null,
    language: null,
  },
);
