import TasksName from "../../shared/components/TasksName/TasksName";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import TaskBox from "../../shared/components/TaskBox/TaskBox";
import Task from "../Task/Task";
import styles from "./ToDoBlock.module.css";
import { useState } from "react";
import { addTask } from "../../redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { modalIsOpen, modalIsClose } from "../../redux/modal/modalSlice";
import Modal from "../../shared/components/Modal/Modal";
import CreateNewTask from "../CreateNewTask/CreateNewTask";

const PlannedBlock = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const modal = useSelector((state) => state.modal.toChangeStatusModal);
  console.log(tasks);
  console.log(modal);

  const handleAddTask = () => {
    dispatch(modalIsOpen(true));
  };

  const handlCloseModal = () => {
    dispatch(modalIsClose(false));
  };

  // const listTask = () =>
  //   tasks.map((task, index) => (
  //     <li key={index}>
  //       <TasksName name={task} />
  //     </li>
  //   ));

  const listTasks = tasks.map((task, index) => (
    <li className={styles.list} key={index}>
      <Task />
    </li>
  ));

  return (
    <div className={styles.box}>
      <TasksName name={"Planned"} />
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
      )}
    </div>
  );
};

export default PlannedBlock;
