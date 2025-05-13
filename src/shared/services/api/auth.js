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
    const { data } = await instance.get("/auth/current");
    return data;
  } catch (error) {
    setToken();
    return error.messege;
  }
};

export const logout = async () => {
  try {
    const data = await instance.post("/auth/logout");

    setToken();
  } catch (error) {
    return error.messege;
  }
};

export const addKids = async (data, token) => {
  try {
    // setToken(token);
    const { data: result } = await instance.post("/auth/addkids", data);

    return result;
  } catch (error) {
    return error.messege;
  }
};

export const getUserKids = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/auth/children");
    return data;
  } catch (error) {
    setToken();
    return error.messege;
  }
};
