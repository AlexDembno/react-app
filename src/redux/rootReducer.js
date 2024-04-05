import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./tasks/tasksSlice";
import { modalReducer } from "./modal/modalSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
