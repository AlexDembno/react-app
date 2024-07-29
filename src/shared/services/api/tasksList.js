import instance from "./instance";

export const getAllTaskLists = async () => {
  try {
    const { data } = await instance.get("/tasksList");
    console.log("getAllTaskLists", data);
    return data;
  } catch (error) {
    return error.messege;
  }
};

export const addTaskList = async (taskList) => {
  console.log("taskList", taskList);
  try {
    const { data } = await instance.post("/tasksList", taskList);
    console.log("data2", data);
    return data;
  } catch (error) {
    console.log("error", error);
    return error.messege;
  }
};
