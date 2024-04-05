import TasksName from "../../shared/components/TasksName/TasksName";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import TaskBox from "../../shared/components/TaskBox/TaskBox";
import Task from "../Task/Task";
import styles from "./ToDoBlock.module.css";
import { useState } from "react";

const ToDoBlock = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const addTask = () => {
    setTasks([...tasks, <Task />]);
  };

  // const listTask = () =>
  //   tasks.map((task, index) => (
  //     <li key={index}>
  //       <TasksName name={task} />
  //     </li>
  //   ));

  const listTasks = tasks.map((task, index) => (
    <li className={styles.list} key={index}>
      {task}
    </li>
  ));

  return (
    <div className={styles.box}>
      <TasksName name={"ToDo"} />
      <ButtonUsage
        startIcon={<Add />}
        variant={"outlined"}
        props={"Add new card"}
        onClick={addTask}
      />
      <ul className={styles.taskWrapper}>{listTasks}</ul>
    </div>
  );
};

export default ToDoBlock;
