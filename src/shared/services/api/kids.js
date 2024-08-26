import instance from "./instance";

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const kidsLogin = async (data) => {
  try {
    const { data: result } = await instance.post("/kids/login", data);
    console.log(result);
    setToken(result.accessToken);
    localStorage.setItem("KidsAccessToken", result.accessToken);
    return result;
  } catch (error) {
    return error.messege;
  }
};

export const kidsCurrent = async (token) => {
  console.log("token", token);
  try {
    setToken(token);
    const { data } = await instance.get("/kids/current");
    return data;
  } catch (error) {
    setToken();
    return error.messege;
  }
};

export const kidsLogout = async () => {
  try {
    console.log(
      "instance.defaults.headers.authorization",
      instance.defaults.headers.authorization
    );

    const data = await instance.post("/kids/logout");
    console.log("data", data);
    setToken();
  } catch (error) {
    return error.messege;
  }
};
