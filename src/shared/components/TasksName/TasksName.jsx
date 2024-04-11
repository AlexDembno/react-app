import BasicMenu from "../BasikMenu/BasikMenu";
import styles from "./TasksName.module.css";

const TasksName = ({ ...props }) => {
  return (
    <div className={styles.menu}>
      <p>{props.name}</p>
      <p>{props.quantity}</p>
      <BasicMenu listId={props.listId} />
    </div>
  );
};

export default TasksName;
