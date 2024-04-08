import BasicMenu from "../../shared/components/BasikMenu/BasikMenu";
import SelectMove from "../../shared/components/Select/Select";
import styles from "./Task.module.css";
import CalendarMonth from "@mui/icons-material/CalendarMonthOutlined";

const Task = ({ tasks }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperName}>
        <h2 className={styles.title}>{tasks.name}</h2>
        <BasicMenu name={"Add new card"} />
      </div>
      <p className={styles.text}>{tasks.description}</p>
      <div className={styles.wrapperName}>
        <CalendarMonth />
        <p>{tasks.startDate}</p>
      </div>
      {tasks.priority && (
        <div className={styles.status}>
          <span className={styles.span}>.</span>
          <span className={styles.medium}>{tasks.priority}</span>
        </div>
      )}
      <SelectMove />
    </div>
  );
};

export default Task;
