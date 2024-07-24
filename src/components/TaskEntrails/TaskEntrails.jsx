import TasksName from "../../shared/components/TasksName";
import ButtonUsage from "../../shared/components/Button";
import Add from "@mui/icons-material/Add";
import Task from "../Task";
import { useSelector } from "react-redux";
import Modal from "../../shared/components/Modal";
import CreateNewTask from "../CreateNewTask";
import useModal from "../../shared/hooks/useModal";
import styles from "./TaskEntrails.module.scss";

const TaskEntrails = ({ taskStatus, listId, ListName }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const tasks = useSelector((state) => state.tasks.items);
  console.log("tasksssssss", tasks);

  const handleAddTask = () => {
    openModal();
  };

  const handlCloseModal = () => {
    closeModal();
  };

  const filteredTasks = tasks.filter((tasks) => tasks.status === taskStatus);

  const listTasks = filteredTasks.map((task) => (
    <li className={styles.list} key={task.id}>
      <Task tasks={task} taskId={task.id} />
    </li>
  ));

  return (
    <div className={styles.box}>
      <TasksName
        name={taskStatus}
        listId={listId}
        quantity={filteredTasks.length}
      />
      <ButtonUsage
        startIcon={<Add />}
        variant={"outlined"}
        props={"Add new card"}
        onClick={handleAddTask}
        width={250}
      />
      <ul className={styles.taskWrapper}>{listTasks}</ul>
      {isOpen && (
        <Modal closeModal={handlCloseModal}>
          <CreateNewTask
            closeModal={handlCloseModal}
            ListName={ListName}
            actionName={"Create New Task"}
          />
        </Modal>
      )}
    </div>
  );
};

export default TaskEntrails;
