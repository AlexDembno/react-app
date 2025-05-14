import BasicMenu from "../BasikMenu";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import CreateNewList from "../../../components/CreateNewList/CreateNewList";
import styles from "./TasksName.module.scss";

const TasksName = ({ ...props }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddTaskList = () => {
    openModal();
  };

  const handlCloseModal = () => {
    closeModal();
  };
  return (
    <div className={styles.menu}>
      <p>{props.name}</p>
      <p className={styles.wrapper}>{props.quantity}</p>
      <BasicMenu listId={props.listId} handleAddTaskList={handleAddTaskList} />
      {isOpen && (
        <Modal closeModal={handlCloseModal}>
          <CreateNewList closeModal={handlCloseModal} childId={props.childId} />
        </Modal>
      )}
    </div>
  );
};

export default TasksName;
