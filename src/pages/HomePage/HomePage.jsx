import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={styles.wrapperPage}>
      <Link to="/kids" className={styles.tasks}>
        Tasks
      </Link>
      <Link to="/parents" className={styles.exercise}>
        Parents
      </Link>
    </section>
  );
};

export default HomePage;
