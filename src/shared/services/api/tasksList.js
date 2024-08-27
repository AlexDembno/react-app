import instance from "./instance";

export const getAllTaskLists = async (userId) => {
  console.log("getAllTaskLists", userId);

  try {
    const { data } = await instance.get(`/tasksList/${userId}`);
    console.log("data", data);

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
