import userTypes from "./userTypes";

export const INITIAL_STATE = {
  currentUser: null,
  error: false,
  fetching: false,
  token: localStorage.getItem("token"),
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_UP_START:
    case userTypes.SIGN_IN_START: {
      return { ...state, error: false, fetching: true };
    }
    case userTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.user,
        error: false,
        fetching: false,
        token: action.payload.token,
      };
    }
    case userTypes.SIGN_UP_FAILURE:
    case userTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case userTypes.SIGN_OUT: {
      return {
        ...state,
        currentUser: null,
        token: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;