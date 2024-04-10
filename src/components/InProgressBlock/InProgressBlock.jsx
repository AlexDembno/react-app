import TasksName from "../../shared/components/TasksName/TasksName";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import Task from "../Task/Task";
import styles from "./ToDoBlock.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalIsOpen, modalIsClose } from "../../redux/modal/modalSlice";
import Modal from "../../shared/components/Modal/Modal";
import CreateNewTask from "../CreateNewTask/CreateNewTask";

import TaskEntrails from "../TaskEntrails/TaskEntrails";

const InProgressBlock = () => {
  // const dispatch = useDispatch();
  // const tasks = useSelector((state) => state.tasks);
  // const modal = useSelector((state) => state.modal.toChangeStatusModal);
  // console.log(tasks);
  // console.log(modal);

  // const handleAddTask = () => {
  //   dispatch(modalIsOpen(true));
  // };

  // const handlCloseModal = () => {
  //   dispatch(modalIsClose(false));
  // };

  // const filteredTasks = tasks.filter(
  //   ({ tasks }) => tasks.status === "In progress"
  // );

  // console.log("filteredTasks", filteredTasks);

  // const listTasks = filteredTasks.map(({ id, tasks }) => (
  //   <li className={styles.list} key={id}>
  //     <Task tasks={tasks} />
  //   </li>
  // ));

  return (
    <>
      {/* <TasksName name={"In progress"} />
      <ButtonUsage
        startIcon={<Add />}
        variant={"outlined"}
        props={"Add new card"}
        onClick={handleAddTask}
      />
      <ul className={styles.taskWrapper}>{listTasks}</ul>
      {modal && (
        <Modal closeModal={handlCloseModal}>
          <CreateNewTask />
        </Modal>
      )} */}
      <TaskEntrails taskStatus={"In progress"} />;
    </>
  );
};

export default InProgressBlock;
