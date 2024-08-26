import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./tasks/tasksSlice";
import { authReducer } from "./auth/authSlice";
import { kidsReduser } from "./kids/kidsSlice";
import { tasksListReducer } from "./taskList/taskListSlice";

const persistConfig = {
  key: "tasks",
  storage,
  whitelist: ["tasks", "tasksList", "auth", "kids"],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  tasksList: tasksListReducer,
  auth: authReducer,
  kids: kidsReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
