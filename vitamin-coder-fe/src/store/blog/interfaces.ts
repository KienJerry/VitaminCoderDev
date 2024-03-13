import type * as interfaces from "@/interfaces/auth.interface";

import type * as actionTypes from "./actionTypes";

export interface AuthState {
  profile: interfaces.ResGetUserProfileData | null;
  pending: boolean;
  error: string | null;
}

// User Profile Type

export interface GetUserRequest {
  type: typeof actionTypes.GET_USER_REQUEST;
}

export interface GetUserSuccessPayload {
  profile: interfaces.ResGetUserProfileData;
}

export interface GetUserSuccess {
  type: typeof actionTypes.GET_USER_SUCCESS;
  payload: GetUserSuccessPayload;
}

export interface GetUserFailPayload {
  error: string;
}

export interface GetUserFail {
  type: typeof actionTypes.GET_USER_FAIL;
  payload: GetUserFailPayload;
}

export type AuthActions = GetUserRequest | GetUserSuccess;
