import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./tasks/tasksSlice";

import { tasksListReducer } from "./taskList/taskListSlice";

const persistConfig = {
  key: "tasks",
  storage,
  whitelist: ["tasks", "tasksList"],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  tasksList: tasksListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
