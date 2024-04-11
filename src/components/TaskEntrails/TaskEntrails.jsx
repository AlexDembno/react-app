import TasksName from "../../shared/components/TasksName/TasksName";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import Task from "../Task/Task";
import styles from "./TaskEntrails.module.css";
import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalIsOpen, modalIsClose } from "../../redux/modal/modalSlice";
import Modal from "../../shared/components/Modal/Modal";
import CreateNewTask from "../CreateNewTask/CreateNewTask";
import useModal from "../../shared/hooks/useModal";

export const TaskContext = createContext();

const TaskProvider = ({ children, taskData }) => {
  return (
    <TaskContext.Provider value={taskData}>{children}</TaskContext.Provider>
  );
};

const TaskEntrails = ({ taskStatus, listId, ListName }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    openModal();
    console.log("modal is open task");
  };

  const handlCloseModal = () => {
    closeModal();
  };

  const filteredTasks = tasks.filter(
    ({ tasks }) => tasks.status === taskStatus
  );

  console.log("filteredTasks", filteredTasks);

  const listTasks = filteredTasks.map(({ id, tasks }) => (
    <li className={styles.list} key={id}>
      <TaskProvider taskData={id}>
        <Task tasks={tasks} id={id} />
      </TaskProvider>
    </li>
  ));

  return (
    <div className={styles.box}>
      <TasksName name={taskStatus} listId={listId} />
      <ButtonUsage
        startIcon={<Add />}
        variant={"outlined"}
        props={"Add new card"}
        onClick={handleAddTask}
      />
      <ul className={styles.taskWrapper}>{listTasks}</ul>
      {isOpen && (
        <Modal closeModal={handlCloseModal}>
          <CreateNewTask closeModal={handlCloseModal} ListName={ListName} />
        </Modal>
      )}
    </div>
  );
};

export default TaskEntrails;
