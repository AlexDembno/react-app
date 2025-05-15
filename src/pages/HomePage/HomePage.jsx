import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../redux/auth/authOperations";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.wrapperPage}>
      <div className={styles.container}>
        {/* <Link to="/kids" className={styles.header__title}>
          Tasks
        </Link> */}
        <Link to="/addkids" className={styles.header__title}>
          Add Kids
        </Link>
        <Link to="/parents" className={styles.header__title}>
          Add tasks
        </Link>
        {/* <Link to="/registration" className={styles.header__title}>
          Registration
        </Link>
        <Link to="/login" className={styles.header__title}>
          Login
        </Link> */}
        <button
          type="button"
          onClick={() => dispatch(fetchLogout())}
          className={styles.header__title}
        >
          Logout
        </button>
      </div>
      {/* <h1 className={styles.title}>Welcome to KidsCalendar</h1>
      <p className={styles.intro}>
        This platform helps you create and manage tasks for your children. Track
        progress, encourage responsibility, and make everyday planning easy.
      </p> */}
      <div className={styles.wrapper}>
        <div className={styles.instructions}>
          <h1 className={styles.title}>Welcome to KidsCalendar</h1>
          <p className={styles.intro}>
            This platform helps you create and manage tasks for your children.
            Track progress, encourage responsibility, and make everyday planning
            easy.
          </p>
          <h2>How to use the app:</h2>
          <ul>
            <li>
              Go to <strong>Add Kids</strong> and create profiles for your
              children.
            </li>
            <li>
              Navigate to <strong>Add Tasks</strong>, select each child and
              create daily or weekly tasks.
            </li>
            <li>
              Children can log in using their <strong>first name</strong> and
              the <strong>password</strong> you created for them.
            </li>
            <li>
              As a parent, you can monitor progress and adjust the schedule
              anytime.
            </li>
            <li>
              Reward your child with praise, bonuses or screen time — it's up to
              you!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
