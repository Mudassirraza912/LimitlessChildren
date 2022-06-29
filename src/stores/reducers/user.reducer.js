import {
  LOG_OUT,
  ORDER_FOOD,
  ORDER_FOOD_DOG,
  SELF_ORDER_DONE,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  TREAT_OTHER,
  TREAT_OTHER_CANCEL,
  TREAT_OTHER_USER_DATA,
  UPDATE_PROFILE,
  UPDATE_PROFILE_PIC,
  SIGNIN,
  SIGNIN_FAILED,
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
        isLoading: false,
      };
    case SIGNIN_SUCCESS:
      console.log({state});
      return {
        ...state,
        users: payload,
      };

    case SIGNIN_FAILED:
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
        orderFood: [],
        orderFoodDog: [],
        treatOther: [],
      };

    default:
      return state;
  }
};

export default userReducer;
