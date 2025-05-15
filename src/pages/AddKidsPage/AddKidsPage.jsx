import { Link } from "react-router-dom";
import AddKidsForm from "../../components/AddKidsForm/AddKIdsForm";
import styles from "./AddKidsPage.module.scss";

const AddKidsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/home" className={styles.link}>
        Go Home
      </Link>
      <AddKidsForm />
    </div>
  );
};

export default AddKidsPage;
