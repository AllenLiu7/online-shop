import { combineReducers } from "redux";

import userReduce from "./user/user.reducer";

export default combineReducers({
  user: userReduce,
});
