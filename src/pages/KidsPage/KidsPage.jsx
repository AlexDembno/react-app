import { Link } from "react-router-dom";
// import Header from "../../components/Header";
import MainKids from "../../components/MainKids";
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
      <button onClick={handleLogout} type="button" className={styles.logout}>
        Logout
      </button>
      <MainKids />
    </div>
  );
};

export default KidsPage;
