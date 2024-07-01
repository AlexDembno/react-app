import React, { createContext } from "react";

import { todoList } from "./task";
import Exercise from "../../components/Exercise/Exercise";
import TaskEntrails from "../../components/TaskEntrails";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import styles from "./ParentsPage.module.scss";

import Main from "../../components/Main";

export const TaskListContext = createContext();

const ParentsPage = () => {
  // const list = todoList.map(({ id, name }) => (
  //   <li className={styles.list} key={id}>
  //     {/* <TaskEntrails taskStatus={name} ListName={name} /> */}
  //     <p>{name}</p>
  //   </li>
  // ));

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.link}>
          Go Home
        </Link>
        <Header />
        <Main />
      </div>
      {/* <ul>{list}</ul> */}
    </>
  );
};

export default ParentsPage;
