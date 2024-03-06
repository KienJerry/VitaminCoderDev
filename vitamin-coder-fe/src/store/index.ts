import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const mainReducer = (
  state: {} | Partial<{}> | undefined,
  action: any | never,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store: any = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, {
  // debug: process.env.NODE_ENV === "development",
  debug: false,
});
