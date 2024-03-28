import BasicMenu from "../../shared/components/BasikMenu/BasikMenu";
import SelectMove from "../../shared/components/Select/Select";
import styles from "./Task.module.css";
import CalendarMonth from "@mui/icons-material/CalendarMonthOutlined";

const Task = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperName}>
        <h2>Task name</h2>
        <BasicMenu name={"Add new card"} />
      </div>
      <p>Text</p>
      <div className={styles.wrapperName}>
        <CalendarMonth />
        <p>Thu Mar 28</p>
      </div>
      <div className={styles.status}>
        <span className={styles.span}>.</span>
        <span className={styles.medium}>Medium</span>
      </div>
      <SelectMove />
    </div>
  );
};

export default Task;
