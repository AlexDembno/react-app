import instance from "./instance";

export const getAllTaskLists = async () => {
  try {
    const { data } = await instance.get("/tasksList");
    return data;
  } catch (error) {
    return error.messege;
  }
};

export const addTaskList = async (taskList) => {
  try {
    const { data } = await instance.post("/tasksList", taskList);
    return data;
  } catch (error) {
    console.log("error", error);
    return error.messege;
  }
};

export const deleteTaskList = async (id) => {
  try {
    await instance.delete(`/tasksList/${id}`);
    return id;
  } catch (error) {
    console.log("error", error);
    return error.messege;
  }
};
