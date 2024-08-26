import { createContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { fetchLogout } from "../../redux/auth/authOperations";
import styles from "./ParentsPage.module.scss";

import Main from "../../components/Main";

export const TaskListContext = createContext();

const ParentsPage = () => {
  // const tasks = useSelector(getAllTasks);
  // console.log("tasks", tasks);

  // const list = todoList.map(({ id, name }) => (
  //   <li className={styles.list} key={id}>
  //     {/* <TaskEntrails taskStatus={name} ListName={name} /> */}
  //     <p>{name}</p>
  //   </li>
  // ));

  // const handleFetchAlltasks = async () => {
  //   console.log("getAllTasksList");
  //   console.log("getAllTaskLists", getAllTaskLists());
  //   console.log("getAllTasks", getAllTasks());
  // };

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={handleLogout} type="button">
          Logout
        </button>
        <Link to="/" className={styles.link}>
          Go Home
        </Link>
        <Header />
        <Main />
      </div>
      {/* <ul>{list}</ul> */}
    </>
  );
};

export default ParentsPage;
