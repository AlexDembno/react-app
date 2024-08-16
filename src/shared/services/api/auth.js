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
  console.log("data", data);

  try {
    const { data: result } = await instance.post("/auth/login", data);
    console.log("result", result);
    setToken(result.accessToken);
    localStorage.setItem("accessToken", result.accessToken);
    return result;
  } catch (error) {
    return error.messege;
  }
};

export const current = async (token) => {
  try {
    setToken(token);
    const data = await instance.get("/auth/current");
    console.log("data", data);
  } catch (error) {
    setToken();
    return error.messege;
  }
};

export const logout = async () => {
  try {
    const data = await instance.get("/auth/logout");
    console.log("data", data);
    setToken();
  } catch (error) {
    return error.messege;
  }
};
