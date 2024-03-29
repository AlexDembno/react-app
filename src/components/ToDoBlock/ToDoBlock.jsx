import TasksName from "../../shared/components/TasksName/TasksName";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import TaskBox from "../../shared/components/TaskBox/TaskBox";
import Task from "../Task/Task";
import styles from "./ToDoBlock.module.css";
import { useState } from "react";

const ToDoBlock = () => {
  const [task, setTask] = useState(0);
  console.log(task);
  const addTask = () => {
    setTask((prevState) => prevState + 1);
  };

  return (
    <div className={styles.box}>
      <TasksName name={"ToDo"} />
      <ButtonUsage
        startIcon={<Add />}
        variant={"outlined"}
        props={"Add new card"}
        onClick={addTask}
      />
      <TaskBox>
        <Task />
      </TaskBox>
    </div>
  );
};

export default ToDoBlock;
