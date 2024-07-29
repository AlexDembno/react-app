import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllTasks } from "../../redux/tasks/tasksSelectors";
import { todoList } from "./task";
import Exercise from "../../components/Exercise/Exercise";
import TaskEntrails from "../../components/TaskEntrails";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { fetchAlltasks } from "../../redux/tasks/tasksOperations";
import { fetchAlltaskList } from "../../redux/taskList/taskListOperations";

import styles from "./ParentsPage.module.scss";

import Main from "../../components/Main";

export const TaskListContext = createContext();

const ParentsPage = () => {
  const dispatch = useDispatch();
  // const tasks = useSelector(getAllTasks);
  // console.log("tasks", tasks);

  // const list = todoList.map(({ id, name }) => (
  //   <li className={styles.list} key={id}>
  //     {/* <TaskEntrails taskStatus={name} ListName={name} /> */}
  //     <p>{name}</p>
  //   </li>
  // ));

  // const handleFetchAlltasks = async () => {
  //   console.log("getAllTasksList");
  //   console.log("getAllTaskLists", getAllTaskLists());
  //   console.log("getAllTasks", getAllTasks());
  // };

  // useEffect(() => {
  //   dispatch(fetchAlltaskList());
  //   dispatch(fetchAlltasks());
  // }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        {/* <button type="button" onClick={handleFetchAlltasks}>
          fetchAlltasks
        </button> */}
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
