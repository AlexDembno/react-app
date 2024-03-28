import TasksName from "../../shared/components/TasksName/TasksName";
import styles from "./Main.module.css";
import { tasks } from "./tasks";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import TaskBox from "../../shared/components/TaskBox/TaskBox";
import Task from "../Task/Task";

const Main = () => {
  const listTasksName = tasks.map((task, index) => (
    <li key={index}>
      <TasksName name={task} />
    </li>
  ));

  const listButtonUsage = tasks.map((index) => (
    <li key={index}>
      <ButtonUsage
        startIcon={<Add />}
        variant={"outlined"}
        props={"Add new card"}
      />
    </li>
  ));

  return (
    <main>
      <ul className={styles.wrapper}>{listTasksName}</ul>
      <ul className={styles.wrapper}>{listButtonUsage}</ul>
      <TaskBox>
        <Task />
      </TaskBox>
    </main>
  );
};

export default Main;
