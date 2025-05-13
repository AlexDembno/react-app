import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskEntrails from "../TaskEntrails";
import { fetchAlltaskList } from "../../redux/taskList/taskListOperations";
import { fetchAlltasks } from "../../redux/tasks/tasksOperations";
import TaskListContext from "../../shared/components/Context/TaskListContext";
import LoaderComponent from "../Loader";
import styles from "./MainParents.module.scss";

const TaskListProvider = ({ children, taskListData, taskListNameData }) => {
  return (
    <TaskListContext.Provider value={{ taskListData, taskListNameData }}>
      {children}
    </TaskListContext.Provider>
  );
};

const MainParents = ({ userId }) => {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.tasksList.items);
  console.log("tasksList", tasksList);

  const isLoading = useSelector((state) => state.tasksList.loading);

  useEffect(() => {
    if (userId) {
      dispatch(fetchAlltaskList(userId));
      dispatch(fetchAlltasks(userId));
    }
  }, [dispatch, userId]);

  if (isLoading) {
    return <LoaderComponent />;
  }

  const list = (tasksList || []).map(({ id, task_list_name }) => (
    <li className={styles.list} key={id}>
      <TaskListProvider taskListData={id} taskListNameData={task_list_name}>
        <TaskEntrails taskStatus={task_list_name} ListName={task_list_name} />
      </TaskListProvider>
    </li>
  ));

  return (
    <main className={styles.main}>
      <ul className={styles.wrapper}>{list}</ul>
    </main>
  );
};

export default MainParents;
