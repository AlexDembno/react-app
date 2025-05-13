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

    setToken(result.accessToken);
    localStorage.setItem("KidsAccessToken", result.accessToken);
    return result;
  } catch (error) {
    return error.messege;
  }
};

export const kidsCurrent = async (token) => {
  console.log("tokenkidsCurrent", token);
  try {
    setToken(token);
    const response = await instance.get("/kids/current");
    console.log("response/current", response);
    return response;
  } catch (error) {
    setToken();
    return error.message;
  }
};

export const kidsLogout = async () => {
  try {
    await instance.post("/kids/logout");
    setToken();
  } catch (error) {
    return error.messege;
  }
};
