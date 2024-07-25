import instance from "./instance";

export const getAllTasks = async () => {
  try {
    const { data } = await instance.get("/tasks");
    console.log("data", data);
    return data;
  } catch (error) {
    return error.messege;
  }
};
