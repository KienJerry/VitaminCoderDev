import * as actionTypes from "./actionTypes";
import type * as interfaces from "./interfaces";

const initialState: interfaces.AuthState = {
  pending: false,
  profile: null,
  error: null,
};

const authReducer = (
  action: interfaces.AuthActions,
  state: interfaces.AuthState = initialState,
) => {
  switch (action?.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload?.profile,
        pending: false,
      };
    default:
      return state;
  }
};

export default authReducer;
