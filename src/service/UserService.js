import AxiosInstance from "./AxiosInstance";

const loginApi = (email, password) => {
  return AxiosInstance().post("/api/v1/users/login", { email, password });
};
const registerApi = (email, password) => {
  return AxiosInstance().post("/api/v1/users/login", { email, password });
};

export { loginApi };
