import { Link } from "react-router-dom";
import forestVideo from "../../shared/images/forest_new.mp4";
import kidsVideo from "../../shared/images/kids_new.mp4";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <video autoPlay muted loop playsInline className={styles.videoBackground}>
        <source src={forestVideo} type="video/mp4" />
        Your browser does not support video.
      </video>
      <div className={styles.overlay}>
        <div className={styles.scrollable}>
          <h1>Welcome to KidsCalendar for Kids and Parents</h1>
          <p>Organize tasks, track progress, and reward your kids!</p>
          <div className={styles.buttons}>
            <Link to="/login" className={styles.btn}>
              Login
            </Link>
            <Link to="/registration" className={styles.btn}>
              Registration
            </Link>
            <Link to="/kidslogin" className={styles.btn}>
              Login for Kids
            </Link>
          </div>
          <div className={styles.description}>
            <h2>About the App</h2>
            <p>
              Our app helps parents organize daily tasks for their children.
              Parents can create tasks, and children can view them on their own
              page and mark them as completed. It's a great way to teach kids
              responsibility and track their progress in a playful format.
            </p>
            <p>
              For convenience, separate accounts are provided for parents and
              children. Tasks can be grouped by day, managed via a calendar, and
              even used as a tool for positive reinforcement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
