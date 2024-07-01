import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";
import styles from "./KidsPage.module.scss";

const KidsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        Go Home
      </Link>
      {/* <Header /> */}
      <Main />
    </div>
  );
};

export default KidsPage;
