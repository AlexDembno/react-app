import React, { createContext } from "react";
import { useSelector } from "react-redux";
import TaskEntrails from "../TaskEntrails";

import styles from "./Main.module.scss";

export const TaskListContext = createContext();

const TaskListProvider = ({ children, taskListData, taskListNameData }) => {
  return (
    <TaskListContext.Provider value={{ taskListData, taskListNameData }}>
      {children}
    </TaskListContext.Provider>
  );
};

const Main = () => {
  const tasksList = useSelector((state) => state.tasksList.items);

  const list = tasksList.map(({ id, task_list_name }) => (
    <li className={styles.list} key={id}>
      <TaskListProvider taskListData={id} taskListNameData={task_list_name}>
        <TaskEntrails taskStatus={task_list_name} ListName={task_list_name} />
      </TaskListProvider>
    </li>
  ));

  return (
    <main className={styles.main}>
      <ul className={styles.wrapper}>{list}</ul>
    </main>
  );
};

export default Main;
