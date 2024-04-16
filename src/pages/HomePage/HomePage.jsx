import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={styles.wrapperPage}>
      <Link to="/tasks" className={styles.link}>
        Tasks
      </Link>
    </section>
  );
};

export default HomePage;
