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
