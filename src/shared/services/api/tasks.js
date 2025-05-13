import instance from "./instance";

export const getAllTasks = async (childId) => {
  try {
    const { data } = await instance.get(`/tasks/${childId}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const addTask = async (task) => {
  try {
    const { data } = await instance.post("/tasks", task);
    return data;
  } catch (error) {
    return error.messege;
  }
};

export const deleteTask = async (id) => {
  try {
    await instance.delete(`/tasks/${id}`);
    return id;
  } catch (error) {
    return error.messege;
  }
};

export const changeStatusTask = async (newStatus) => {
  try {
    const { data } = await instance.patch("/tasks", newStatus);
    return data;
  } catch (error) {
    return error.messege;
  }
};

export const editTask = async (newTask) => {
  try {
    const { data } = await instance.patch("/tasks/edit", newTask);
    return data;
  } catch (error) {
    return error.messege;
  }
};
