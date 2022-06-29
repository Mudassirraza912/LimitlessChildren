import {
  LOG_OUT,
  ORDER_FOOD,
  ORDER_FOOD_DOG,
  SELF_ORDER_DONE,
  SIGNIN,
  SIGNIN_FAILED,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  TREAT_OTHER,
  TREAT_OTHER_CANCEL,
  TREAT_OTHER_USER_DATA,
  UPDATE_PROFILE,
  UPDATE_PROFILE_PIC,
} from './actionType';
import {ToastMessage} from '../../components/ToastMessage/ToastMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Post, Get, Put, Delete} from '../../utils/apicalls/apicalls';
import {BASE_URL} from '../../utils/constants/constants';
export const SignUpAction = (userData, navigation) => {
  console.log('userData signUp', userData);

  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: SIGNUP});

    Post('https://limitless-children-backend.herokuapp.com/v1/user', userData)
      .then(function (response) {
        console.log('response', response.data);
        if (response.status == 201) {
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: response.data,
          });
          ToastMessage('SignUp Successfully', null, 'success');
          navigation.navigate('Login');
        } else {
          console.log('error else');
          ToastMessage('SignUp Error ', null, 'error');
          dispatch({type: SIGNUP_FAILED});
          // return Promise.resolve({ status: false });
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('error', error);
          ToastMessage('please try again', null, 'error');
          dispatch({type: SIGNUP_FAILED});
        } else {
          console.log('error', error.response.data.message);
          // ToastMessage(error.response.data.message, null, 'error');
          ToastMessage('SignUp Error ', null, 'error');
          dispatch({type: SIGNUP_FAILED});
        }

        // return Promise.reject({ status: false });
      });
  };
};

export const SignInAction = (userData, navigation) => {
  console.log('userData signIn', userData);
  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: SIGNIN});

    Post(
      'https://limitless-children-backend.herokuapp.com/v1/auth/login',
      userData,
    )
      .then(function (response) {
        console.log('response', response);
        if (response.status == 200) {
          dispatch({
            type: SIGNIN_SUCCESS,
            payload: response.data,
          });
          ToastMessage('SignIn Successfully', null, 'success');
          navigation.navigate('MainDrawer');
        } else {
          console.log('error else');
          ToastMessage('SignIn Error ', null, 'error');
          dispatch({type: SIGNIN_FAILED});
          // return Promise.resolve({ status: false });
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('error', error);
          ToastMessage('please try again', null, 'error');
          dispatch({type: SIGNIN_FAILED});
        } else {
          console.log('error', error.response.data.message);
          // ToastMessage(error.response.data.message, null, 'error');
          ToastMessage('SignIn Error ', null, 'error');
          dispatch({type: SIGNIN_FAILED});
        }

        // return Promise.reject({ status: false });
      });
  };
};

export const updateProfilePicAction = (data, navigation) => {
  return dispatch => {
    dispatch({type: UPDATE_PROFILE_PIC, payload: data});
  };
};

export const updateProfileAction = (data, navigation) => {
  return dispatch => {
    dispatch({type: UPDATE_PROFILE, payload: data});
  };
};

export const orderFoodAction = (data, event, navigation) => {
  // console.log({ event })
  return dispatch => {
    let array = [];
    array.push(data);

    dispatch({type: ORDER_FOOD, payload: {array, event}});
  };
};

export const orderFoodDogAction = (data, event, navigation) => {
  // console.log({ event, data })
  return dispatch => {
    let array = [];
    array.push(data);
    console.log('in action', array);
    dispatch({type: ORDER_FOOD_DOG, payload: {array, event}});
  };
};

export const selforderDoneAction = data => {
  return dispatch => {
    dispatch({type: SELF_ORDER_DONE});
  };
};

export const treatOthersAction = (data, event, navigation) => {
  return dispatch => {
    let array = [];
    array.push(data);
    dispatch({type: TREAT_OTHER, payload: {array, event}});
  };
};

export const treatOtherCancelAction = (data, event) => {
  return dispatch => {
    dispatch({type: TREAT_OTHER_CANCEL, payload: {data, event}});
  };
};

export const LogOutAction = (userData, navigation) => {
  return dispatch => {
    dispatch({type: LOG_OUT});
    // navigation.navigate('AppStackNavigator')
  };
};
