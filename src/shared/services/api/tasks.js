import instance from "./instance";

export const getAllTasks = async () => {
  try {
    const { data } = await instance.get("/tasks");
    return data;
  } catch (error) {
    return error.messege;
  }
};
