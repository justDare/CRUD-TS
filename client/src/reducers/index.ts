import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  employees: employeeReducer,
  message: messageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
