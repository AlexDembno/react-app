import ButtonUsage from "../../shared/components/Button/Button";
import Edit from "@mui/icons-material/Edit";
import styles from "./CreateNewList.module.css";

const CreateNewList = ({ setNewList }) => {
  return (
    <div className={styles.box}>
      <button
        className={styles.button}
        onClick={() => setNewList(false)}
        type="button"
      >
        X
      </button>

      <div className={styles.wrapper}>
        <div>
          <div className={styles.wrapperName}>
            <p>Task name</p>
            <ButtonUsage
              startIcon={<Edit />}
              props={"Edit task"}
              variant={"outlined"}
            />
          </div>
          <p>Status</p>
          <p>In progress</p>
          <p>Due date</p>
          <p>Web, 28 April</p>
          <p>Priority</p>
          <p>Low</p>
          <p>Description</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quod
            saepe.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quod
            saepe.
          </p>
        </div>
        <div>
          <p>Activity</p>
          <ul>
            <li>
              <p>You created this task</p>
              <p>Mar 5 at 5:10 pm</p>
            </li>
            <li>
              <p>You changes status from To Do to In Progress</p>
              <p>Mar 5 at 5:10 pm</p>
            </li>
            <li>
              <p>You renamed this task from Task Name 1 to Nask Name 2</p>
              <p>Mar 5 at 5:10 pm</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateNewList;
