import TasksName from "../../shared/components/TasksName/TasksName";
import ButtonUsage from "../../shared/components/Button/Button";
import Add from "@mui/icons-material/Add";
import Task from "../Task/Task";
import styles from "./TaskEntrails.module.css";
import { useSelector } from "react-redux";
import Modal from "../../shared/components/Modal/Modal";
import CreateNewTask from "../CreateNewTask/CreateNewTask";
import useModal from "../../shared/hooks/useModal";

const TaskEntrails = ({ taskStatus, listId, ListName }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const tasks = useSelector((state) => state.tasks);
  console.log("tasks", tasks);

  const handleAddTask = () => {
    openModal();
  };

  const handlCloseModal = () => {
    closeModal();
  };

  const filteredTasks = tasks.filter((tasks) => tasks.status === taskStatus);

  console.log("filteredTasks", filteredTasks);

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
            name={"Create New Task"}
          />
        </Modal>
      )}
    </div>
  );
};

export default TaskEntrails;
