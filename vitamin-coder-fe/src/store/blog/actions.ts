import * as actionTypes from "./actionTypes";
import type * as interfaces from "./interfaces";

const actions = {
  getUserRequest: () => ({
    type: actionTypes.GET_USER_REQUEST,
  }),

  getUserSuccess: (
    // payload: interfaces.GetUserSuccessPayload,
    payload: any,
  ): interfaces.GetUserSuccess => {
    return {
      type: actionTypes.GET_USER_SUCCESS,
      payload,
    };
  },

  getUserFail: (
    payload: interfaces.GetUserFailPayload,
  ): interfaces.GetUserFail => {
    return {
      type: actionTypes.GET_USER_FAIL,
      payload,
    };
  },
};
export default actions;
