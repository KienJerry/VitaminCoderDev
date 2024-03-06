import { all, call, fork, put, takeEvery } from "redux-saga/effects";

// import { RES_MESS } from "@/common/config/response.config";
// import type { ResGetUserProfile } from "@/interfaces/auth.interface";
import services from "@/services/AuthService";

import actions from "./actions";
import * as actionTypes from "./actionTypes";

function* checkAuthorization(): any {
  try {
    const model: string = "available";
    // const response = yield call(services.login, model);
    const profile = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ];
    console.log(profile)
    // const data = response?.data?.data?.search;

    yield put(actions.getUserSuccess({ profile }));
  } catch (e) {
    yield put(actions.getUserFail(e));
  }
}

function* watchAuthorization() {
  yield takeEvery(actionTypes.GET_USER_REQUEST, checkAuthorization);
}

export default function* rootSaga() {
  yield all([fork(watchAuthorization)]);
}
