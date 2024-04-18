import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import styles from "./TaskPage.module.scss";

const TaskPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        Go Home
      </Link>
      <Header />
      <Main />
    </div>
  );
};

export default TaskPage;
