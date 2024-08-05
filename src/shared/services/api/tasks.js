import instance from "./instance";

export const getAllTasks = async () => {
  try {
    const { data } = await instance.get("/tasks");
    return data;
  } catch (error) {
    return error.messege;
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
