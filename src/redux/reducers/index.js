import { combineReducers } from "redux";
import userReducer from "./userReducer";
import acticlesReducer from "./articlesReducer";
const rootReducer = combineReducers({
  userState: userReducer,
  articleState: acticlesReducer,
});
export default rootReducer;
