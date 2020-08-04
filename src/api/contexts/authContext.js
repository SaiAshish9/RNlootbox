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
        token: null,
        error_msg: action.payload,
      };
    case 'signout':
      return {
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

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
  navigate({name: 'language'});
};

const removeError = (dispatch) => () => dispatch({type: 'remove_error'});

export const {Context, Provider} = createDataContext(
  reducer,
  {
    signin,
    removeError,
    signout,
    checkUser
  },
  {
    token: null,
    error_msg: '',
  },
);
