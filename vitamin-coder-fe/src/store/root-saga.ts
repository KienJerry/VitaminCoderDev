import { all } from "redux-saga/effects";

import auth from "@/store/auth/sagas";

export default function* rootSaga() {
  yield all([auth()]);
}
