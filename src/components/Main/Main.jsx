import TasksName from "../../shared/components/TasksName/TasksName";
import styles from "./Main.module.css";
import { tasks } from "./tasks";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import TaskBox from "../../shared/components/TaskBox/TaskBox";
import Task from "../Task/Task";
import ToDoBlock from "../ToDoBlock/ToDoBlock";
import ClosedBlock from "../ClosedBlock/ClosedBlock";
import PlannedBlock from "../PlannedBlock/PlannedBlock";
import InProgressBlock from "../InProgressBlock/InProgressBlock";

const Main = () => {
  // const listTasksName = tasks.map((task, index) => (
  //   <li key={index}>
  //     <TasksName name={task} />
  //   </li>
  // ));

  // const listButtonUsage = tasks.map((index) => (
  //   <li key={index}>
  //     <ButtonUsage
  //       startIcon={<Add />}
  //       variant={"outlined"}
  //       props={"Add new card"}
  //     />
  //   </li>
  // ));

  return (
    <main className={styles.wrapper}>
      <ToDoBlock />
      <PlannedBlock />
      <InProgressBlock />
      <ClosedBlock />
    </main>
  );
};

export default Main;
