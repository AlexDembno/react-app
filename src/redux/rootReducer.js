import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./tasks/tasksSlice";
import { modalReducer } from "./modal/modalSlice";
import { tasksListReducer } from "./taskList/taskListSlice";

const persistConfig = {
  key: "tasks",
  storage,
  whitelist: ["tasks", "tasksList"],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  tasksList: tasksListReducer,
  modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
