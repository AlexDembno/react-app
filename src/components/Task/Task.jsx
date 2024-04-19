import BasicMenu from "../../shared/components/BasikMenu/BasikMenu";
import SelectMove from "../../shared/components/Select/Select";
import CalendarMonth from "@mui/icons-material/CalendarMonthOutlined";
import styles from "./Task.module.scss";

const Task = ({ tasks, taskId }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperName}>
        <h2 className={styles.title}>{tasks?.name}</h2>
        <BasicMenu name={"Add new card"} taskId={taskId} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{tasks?.description}</p>
      </div>
      {tasks?.startDate && (
        <div className={styles.wrapperDate}>
          <CalendarMonth />
          <p className={styles.textDate}>{tasks?.startDate}</p>
          {tasks?.priority && (
            <div className={styles.status}>
              <p className={styles.medium}>{tasks.priority}</p>
            </div>
          )}
        </div>
      )}

      <SelectMove
        tasks={tasks}
        taskId={taskId}
        className={styles.lastSelectMove}
      />
    </div>
  );
};

export default Task;
