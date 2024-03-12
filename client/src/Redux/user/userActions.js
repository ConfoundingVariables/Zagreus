import userTypes from "./userTypes";

import { registerUser } from "../../services/authenticationServices";

export const signUpStart =
  (email, fullName, username, password) => async (dispatch) => {
    try {
      dispatch({ type: userTypes.SIGN_IN_START });
      const response = await registerUser(email, fullName, username, password);
      dispatch(signInStart(null, null, response.token));
    } catch (err) {
      dispatch({ type: userTypes.SIGN_UP_FAILURE, payload: err.message });
    }
  };
