import React, { createContext } from "react";
import { useSelector } from "react-redux";
import TaskEntrails from "../TaskEntrails/TaskEntrails";

import styles from "./Main.module.css";

export const TaskListContext = createContext();

const TaskListProvider = ({ children, taskListData }) => {
  return (
    <TaskListContext.Provider value={taskListData}>
      {children}
    </TaskListContext.Provider>
  );
};

const Main = () => {
  const tasksList = useSelector((state) => state.tasksList);
  console.log("tasksList", tasksList);

  const list = tasksList.map(({ id, name }) => (
    <li className={styles.list} key={id}>
      <TaskListProvider taskListData={id}>
        <TaskEntrails taskStatus={name} ListName={name} />
      </TaskListProvider>
    </li>
  ));

  return (
    <main className={styles.wrapper}>
      <ul className={styles.wrapper}>{list}</ul>
    </main>
  );
};

export default Main;
