import React, { createContext } from "react";
import { todoList } from "./task";
import Exercise from "../../components/Exercise/Exercise";
import TaskEntrails from "../../components/TaskEntrails";

import styles from "./ExercisePage.module.scss";

export const TaskListContext = createContext();

const ExercisePage = () => {
  const list = todoList.map(({ id, name }) => (
    <li className={styles.list} key={id}>
      {/* <TaskEntrails taskStatus={name} ListName={name} /> */}
      <p>{name}</p>
    </li>
  ));

  return (
    <>
      <h1>ExercisePage</h1>
      <ul>{list}</ul>
    </>
  );
};

export default ExercisePage;
