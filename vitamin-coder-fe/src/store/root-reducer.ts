import { combineReducers } from "redux";

import Auth from "@/store/auth/reducer";

const rootReducer = combineReducers({
  Auth,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
