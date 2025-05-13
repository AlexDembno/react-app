import React, { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskEntrails from "../TaskEntrails";
import { fetchAlltaskList } from "../../redux/taskList/taskListOperations";
import { fetchAlltasks } from "../../redux/tasks/tasksOperations";
import TaskListContext from "../../shared/components/Context/TaskListContext";
import LoaderComponent from "../../components/Loader";
import styles from "./MainKids.module.scss";

const TaskListProvider = ({ children, taskListData, taskListNameData }) => {
  return (
    <TaskListContext.Provider value={{ taskListData, taskListNameData }}>
      {children}
    </TaskListContext.Provider>
  );
};

const MainKids = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.tasksList.items);
  const isLoading = useSelector((state) => state.tasksList.loading);
  // const isLogin = useSelector((state) => state.auth.isLogin);

  const userId = useSelector((state) => state.kids.userId);

  console.log("userId", userId);

  useEffect(() => {
    dispatch(fetchAlltaskList(userId));
    dispatch(fetchAlltasks(userId));
  }, [dispatch, userId]);

  if (isLoading) {
    return <LoaderComponent />;
  }

  const list = (tasksList || []).map(({ id, task_list_name }) => (
    <li className={styles.list} key={id}>
      <TaskListProvider taskListData={id} taskListNameData={task_list_name}>
        <TaskEntrails
          listId={id}
          taskStatus={task_list_name}
          ListName={task_list_name}
        />
      </TaskListProvider>
    </li>
  ));

  return (
    <main className={styles.main}>
      <ul className={styles.wrapper}>{list}</ul>
    </main>
  );
};

export default MainKids;
