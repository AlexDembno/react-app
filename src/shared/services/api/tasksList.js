import instance from "./instance";

export const getAllTaskLists = async (childId) => {
  try {
    const { data } = await instance.get(`/tasksList/${childId}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const addTaskList = async (taskList) => {
  try {
    const { data } = await instance.post("/tasksList", taskList);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const deleteTaskList = async (id) => {
  try {
    await instance.delete(`/tasksList/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};
