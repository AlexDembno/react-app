import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../redux/auth/authOperations";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.wrapperPage}>
      <div className={styles.container}>
        <Link to="/kids" className={styles.header__title}>
          Tasks
        </Link>
        <Link to="/addkids" className={styles.header__title}>
          Add Kids
        </Link>
        <Link to="/parents" className={styles.header__title}>
          Parents
        </Link>
        <Link to="/registration" className={styles.header__title}>
          Registration
        </Link>
        <Link to="/login" className={styles.header__title}>
          Login
        </Link>
        <button
          type="button"
          onClick={() => dispatch(fetchLogout())}
          className={styles.header__title}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default HomePage;
