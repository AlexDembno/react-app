import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";
import styles from "./KidsPage.module.scss";
import { useDispatch } from "react-redux";
import { fetchKidsLogout } from "../../redux/kids/kidsOperations";

const KidsPage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(fetchKidsLogout());
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
      <Link to="/" className={styles.link}>
        Go Home
      </Link>
      {/* <Header /> */}
      <Main />
    </div>
  );
};

export default KidsPage;
