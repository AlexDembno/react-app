import instance from "./instance";

export const kidsLogin = async (data) => {
  try {
    const { data: result } = await instance.post("/kids/login", data);
    console.log(result);
    return result;
  } catch (error) {
    return error.messege;
  }
};
