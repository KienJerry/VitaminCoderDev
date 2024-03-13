import { combineReducers } from "redux";

import Auth from "@/store/auth/reducer";
import Blog from "@/store/blog/reducer";

const rootReducer = combineReducers({
  Auth,
  Blog,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
