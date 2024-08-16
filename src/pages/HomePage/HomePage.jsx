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
      <Link to="/registration" className={styles.registration}>
        Registration
      </Link>
      <Link to="/login" className={styles.login}>
        Login
      </Link>
    </section>
  );
};

export default HomePage;
