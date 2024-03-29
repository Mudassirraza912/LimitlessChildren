import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_SUCCESS,
  GET_FAVORITE,
  GET_FAVORITE_FAILED,
  GET_FAVORITE_SUCCESS,
  GET_PLAYLIST,
  GET_PLAYLIST_FAILED,
  GET_PLAYLIST_SUCCESS,
  GET_STORY,
  GET_STORY_CATEGORIES,
  GET_STORY_CATEGORIES_FAILED,
  GET_STORY_CATEGORIES_SUCCESS,
  GET_STORY_FAILED,
  GET_STORY_SUCCESS,
  ISLOGGEDIN,
  LOG_OUT,
  ORDER_FOOD,
  ORDER_FOOD_DOG,
  OTP,
  OTP_FAILD,
  OTP_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  SELF_ORDER_DONE,
  SIGNIN,
  SIGNIN_FAILED,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  SKIP_ONBOARDING,
  TREAT_OTHER,
  TREAT_OTHER_CANCEL,
  TREAT_OTHER_USER_DATA,
  UPDATE_PROFILE,
  UPDATE_PROFILE_PIC,
} from './actionType';
import {ToastMessage} from '../../components/ToastMessage/ToastMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Post, Get, Put, Delete, Patch} from '../../utils/apicalls/apicalls';
import {BASE_URL} from '../../utils/constants/constants';

export const SignUpAction = (userData, navigation) => {
  console.log('userData signUp', userData);
  return dispatch => {
    dispatch({type: SIGNUP});
    Post('https://limitless-dev-backend.herokuapp.com/v1/user', userData)
      .then(function (response) {
        console.log('response', response.data);
        if (response.status == 201) {
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: null,
          });
          ToastMessage('SignUp Successfully', null, 'success');
          navigation.navigate('Login');
        } else {
          console.log('error else');
          ToastMessage('SignUp Error ', null, 'error');
          dispatch({type: SIGNUP_FAILED});
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('SignUpAction error', error, userData);
          ToastMessage('please try again', null, 'error');
          dispatch({type: SIGNUP_FAILED});
        } else {
          console.log('error', error.response.data.message);
          ToastMessage('SignUp Error ', null, 'error');
          dispatch({type: SIGNUP_FAILED});
        }
      });
  };
};

export const SignInAction = (userData, navigation) => {
  console.log('userData signIn', userData);
  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: SIGNIN});

    Post(
      'https://limitless-dev-backend.herokuapp.com/v1/auth/login',
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
          ToastMessage('Incorrect Email or Password ', null, 'error');
          dispatch({type: SIGNIN_FAILED});
        } else {
          console.log('SignInAction error', error.response.data.message);
          // ToastMessage(error.response.data.message, null, 'error');
          ToastMessage('SignIn Error ', null, 'error');
          dispatch({type: SIGNIN_FAILED});
        }

        // return Promise.reject({ status: false });
      });
  };
};

export const ForgotPasswordAction = (userData, navigation) => {
  console.log('userData signIn', userData);
  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: FORGOT_PASSWORD});

    Post(
      'https://limitless-dev-backend.herokuapp.com/v1/user/forgot-password',
      userData,
    )
      .then(function (response) {
        console.log('response', response);
        if (response.status == 201) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            // payload: response.data,
          });
          ToastMessage('Otp sent Successfully', null, 'success');
          navigation.navigate('Otp', {
            emailFromParam: userData.email,
          });
        } else {
          console.log('error else');
          ToastMessage('Forgot Password Error ', null, 'error');
          dispatch({type: FORGOT_PASSWORD_FAILED});
          // return Promise.resolve({ status: false });
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('error', error);
          ToastMessage('please try again', null, 'error');
          dispatch({type: FORGOT_PASSWORD_FAILED});
        } else {
          console.log('error', error.response.data.message);
          // ToastMessage(error.response.data.message, null, 'error');
          ToastMessage('Forgot Password Error ', null, 'error');
          dispatch({type: FORGOT_PASSWORD_FAILED});
        }

        // return Promise.reject({ status: false });
      });
  };
};

export const OtpVerifyAction = (data, navigation) => {
  console.log('OtpVerifyAction ', data);

  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: OTP});

    Post(
      'https://limitless-dev-backend.herokuapp.com/v1/user/verify-otp',
      data,
    )
      .then(function (response) {
        console.log('response', response);
        if (response.status == 200) {
          dispatch({
            type: OTP_SUCCESS,
            // payload: response
          });
          ToastMessage('Otp Verify Successfully', null, 'success');
          navigation.navigate('ResetPassword', {
            resetData: response.data,
          });
        } else {
          console.log('error else');
          ToastMessage('Otp Error ', null, 'error');
          dispatch({type: OTP_FAILD});
          // return Promise.resolve({ status: false });
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('error', error);
          ToastMessage('Otp Not verify', null, 'error');
          dispatch({type: OTP_FAILD});
        } else {
          console.log('error', error.response.data.message);
          ToastMessage('Otp Error  ', null, 'error');
          dispatch({type: OTP_FAILD});
        }
      });
  };
};

export const ResetPasswordAction = (data, navigation) => {
  console.log('ResetPasswordAction ', data);

  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: RESET_PASSWORD});

    Post(
      'https://limitless-dev-backend.herokuapp.com/v1/user/reset-password',
      data,
    )
      .then(function (response) {
        console.log('response', response);
        if (response.status == 200) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            // payload: response
          });
          ToastMessage('Password Reset Successfully', null, 'success');
          navigation.navigate('Login');
        } else {
          console.log('error else');
          ToastMessage('Reset Password Error ', null, 'error');
          dispatch({type: RESET_PASSWORD_FAILED});
          // return Promise.resolve({ status: false });
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('error', error);
          ToastMessage('Reset Password', null, 'error');
          dispatch({type: RESET_PASSWORD_FAILED});
        } else {
          console.log('error', error.response.data.message);
          ToastMessage('Reset Password Error  ', null, 'error');
          dispatch({type: RESET_PASSWORD_FAILED});
        }
      });
  };
};

export const GetStoryCategoriesAction = (data, navigation) => {
  // console.log('GetStoryCategoriesAction ', data);

  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: GET_STORY_CATEGORIES});

    Get(
      'https://limitless-dev-backend.herokuapp.com/v1/story/categories',
      {},
      data.token,
    )
      .then(function (response) {
        // console.log('response', response);
        if (response.status == 200) {
          dispatch({
            type: GET_STORY_CATEGORIES_SUCCESS,
            payload: response.data,
          });
          // ToastMessage('Get Stories Successfully', null, 'success');
          // navigation.navigate('Login');
        } else {
          console.log('error else');
          // ToastMessage('Get Stories  Error ', null, 'error');
          dispatch({type: GET_STORY_CATEGORIES_FAILED});
          // return Promise.resolve({ status: false });
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('GetStoryCategoriesAction error', error);
          // ToastMessage('Get Stories Error', null, 'error');
          dispatch({type: GET_STORY_CATEGORIES_FAILED});
        } else {
          console.log('GetStoryCategoriesAction error', error.response.data.message);
          // ToastMessage('Get Stories Error ', null, 'error');
          dispatch({type: GET_STORY_CATEGORIES_FAILED});
        }
      });
  };
};

export const GetStoryAction = (data, navigation) => {
  // console.log('GetStoryAction ', data);

  return dispatch => {
    // dispatch({ type: SIGNUP })

    dispatch({type: GET_STORY});

    Get(
      'https://limitless-dev-backend.herokuapp.com/v1/story',
      {},
      data.token,
    )
      .then(function (response) {
        // console.log('response', response);
        if (response.status == 200) {
          dispatch({
            type: GET_STORY_SUCCESS,
            payload: response.data,
          });
          // ToastMessage('Get Stories Successfully', null, 'success');
          // navigation.navigate('Login');
        } else {
          console.log('error else');
          // ToastMessage('Get Stories  Error ', null, 'error');
          dispatch({type: GET_STORY_FAILED});
          // return Promise.resolve({ status: false });
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('GetStoryAction error', error);
          // ToastMessage('Get Stories Error', null, 'error');
          dispatch({type: GET_STORY_FAILED});
        } else {
          console.log('GetStoryAction error', error.response.data.message);
          // ToastMessage('Get Stories Error ', null, 'error');
          dispatch({type: GET_STORY_FAILED});
        }
      });
  };
};

export const SkipOnboardingAction = (data, navigation) => {
  console.log('data+++++++++++action', data);
  return dispatch => {
    dispatch({type: SKIP_ONBOARDING, payload: data});
    // navigation.navigate('AppStackNavigator')
  };
};

export const LogOutAction = (userData, navigation) => {
  return dispatch => {
    dispatch({type: LOG_OUT});
    // navigation.navigate('AppStackNavigator')
  };
};
export const isOnboarding_Show = e => {
  return {
    type: 'For_Onboarding',
    payload: e,
  };
};

export const AddToPlaylist = (data, token) => {
  return dispatch => {
    dispatch({type: SIGNUP});
    Post('https://limitless-dev-backend.herokuapp.com/v1/user/playlist/add', data, token)
      .then(function (response) {
        console.log('response AddToPlaylist', response.data);
        ToastMessage('Add to Playlist', null, 'success');
      })
      .catch(function (error) {
        if (error) {
          console.log('AddToPlaylist error', error, data, token);
          ToastMessage('please try again', null, 'error');
        } else {
          console.log('error', error.response.data.message);
          ToastMessage('Add to Playlist Error ', null, 'error');
        }
      });
  };
};

export const RemoveToPlaylist = (data, token) => {
  return dispatch => {
    dispatch({type: SIGNUP});
    Post('https://limitless-dev-backend.herokuapp.com/v1/user/playlist/remove', data, token)
      .then(function (response) {
        console.log('response RemoveToPlaylist', response.data);
        ToastMessage('Remove to Playlist', null, 'success');
      })
      .catch(function (error) {
        if (error) {
          console.log('AddToPlaylist error', error, data, token);
          ToastMessage('please try again', null, 'error');
        } else {
          console.log('error', error.response.data.message);
          ToastMessage('Remove to Playlist Error ', null, 'error');
        }
      });
  };
};

export const getPlaylist = (token) => {
  return dispatch => {
    dispatch({type: GET_PLAYLIST});
    Get(
      'https://limitless-dev-backend.herokuapp.com/v1/user/playlist',
      {},
      token,
    )
      .then(function (response) {
        if (response.status == 200) {
          dispatch({
            type: GET_PLAYLIST_SUCCESS,
            payload: response.data,
          });
          
        } else {
          console.log('error else');
          dispatch({type: GET_PLAYLIST_FAILED});
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('getPlaylist error', error);
          // ToastMessage('Get Stories Error', null, 'error');
          dispatch({type: GET_PLAYLIST_FAILED});
        } else {
          console.log('getPlaylist error', error.response.data.message);
          // ToastMessage('Get Stories Error ', null, 'error');
          dispatch({type: GET_PLAYLIST_FAILED});
        }
      });
  };
}

export const AddToFavorite = (data, token) => {
  console.log('data AddToFavorite', data);
  return dispatch => {
    dispatch({type: SIGNUP});
    Post('https://limitless-dev-backend.herokuapp.com/v1/user/favourite/add', data, token)
      .then(function (response) {
        console.log('response AddToFavorite', response.data);
        ToastMessage('Add to Favorite Successfully', null, 'success');
      })
      .catch(function (error) {
        if (error) {
          console.log('AddToFavorite error', error, data, token);
          ToastMessage('please try again', null, 'error');
        } else {
          console.log('error', error.response.data.message);
          ToastMessage('Add to Favorite ', null, 'error');
        }
      });
  };
};

export const RemoveToFavorite = (data, token) => {
  console.log('data RemoveToFavorite', data);
  return dispatch => {
    dispatch({type: SIGNUP});
    Post('https://limitless-dev-backend.herokuapp.com/v1/user/favourite/remove', data, token)
      .then(function (response) {
        console.log('response RemoveToFavorite', response.data);
        ToastMessage('Remove Favorite Successfully', null, 'success');
      })
      .catch(function (error) {
        if (error) {
          console.log('RemoveToFavorite error', error, data, token);
          ToastMessage('please try again', null, 'error');
        } else {
          console.log('error', error.response.data.message);
          ToastMessage('Remove to Favorite ', null, 'error');
        }
      });
  };
};

export const getFavoritelist = (token) => {
  return dispatch => {
    dispatch({type: GET_FAVORITE});
    Get(
      'https://limitless-dev-backend.herokuapp.com/v1/user/favourite',
      {},
      token,
    )
      .then(function (response) {
        if (response.status == 200) {
          dispatch({
            type: GET_FAVORITE_SUCCESS,
            payload: response.data,
          });
          
        } else {
          console.log('error else');
          dispatch({type: GET_FAVORITE_FAILED});
        }
      })
      .catch(function (error) {
        if (error) {
          console.log('getFavoritelist error', error, token);
          dispatch({type: GET_FAVORITE_FAILED});
        } else {
          console.log('getFavoritelist error', error.response.data.message);
          dispatch({type: GET_FAVORITE_FAILED});
        }
      });
  };
}
