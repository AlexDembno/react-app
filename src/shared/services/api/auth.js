import instance from "./instance";

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = async (data) => {
  try {
    const { data: result } = await instance.post("/auth/register", data);
    console.log("result", result);
    setToken(result.accessToken);
    localStorage.setItem("accessToken", result.accessToken);
    return result;
  } catch (error) {
    return error.messege;
  }
};

export const login = async (data) => {
  try {
    const { data: result } = await instance.post("/auth/login", data);
    console.log("result", result);

    return result;
  } catch (error) {
    return error.messege;
  }
};
