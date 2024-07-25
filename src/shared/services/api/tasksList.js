import instance from "./instance";

export const getAllTaskLists = async () => {
  try {
    const { data } = await instance.get("/tasksList");
    console.log("data2", data);
    return data;
  } catch (error) {
    console.log("error", error);
    return error.messege;
  }
};
