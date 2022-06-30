import {
  LOG_OUT,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_PIC,
  SIGNIN,
  SIGNIN_FAILED,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  OTP,
  OTP_SUCCESS,
  OTP_FAILD,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from '../actions/actionType';

const initialState = {
  users: null,
  isLoading: false,
  profilePic: null,
  orderFood: [],
  orderFoodDog: [],
  treatOther: [],
};

export const userReducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case SIGNIN:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNIN_SUCCESS:
      console.log({state});
      return {
        ...state,
        users: payload,
        isLoading: false,
      };

    case SIGNIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case FORGOT_PASSWORD:
      return {
        ...state,
        isLoading: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // users: payload,
      };
    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case OTP:
      // console.log('userData signUp reducer', payload)
      return {
        ...state,
        isLoading: true,
      };

    case OTP_SUCCESS:
      // console.log('userData signUp reducer', payload)
      return {
        ...state,
        isLoading: false,
      };
    case OTP_FAILD:
      // console.log('userData signUp reducer', payload)
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        isLoading: true,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case UPDATE_PROFILE_PIC:
      return {
        ...state,
        profilePic: payload,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        users: payload,
      };

    case LOG_OUT:
      return {
        ...state,
        users: null,
        isLoading: false,
        profilePic: null,
      };

    default:
      return state;
  }
};

export default userReducer;
