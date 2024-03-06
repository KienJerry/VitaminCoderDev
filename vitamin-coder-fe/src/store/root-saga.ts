import { all } from "redux-saga/effects";

import auth from "@/store/auth/sagas";
import blog from "@/store/blog/sagas";

export default function* rootSaga() {
  yield all([auth()]);
  yield all([blog()]);
}
