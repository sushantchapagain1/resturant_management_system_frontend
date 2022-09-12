import { backendApi } from "../utils/api";

type loginData = {
  email: string;
  password: string;
};

export const login = async (data: loginData) => {
  const response = await backendApi.post("users/login", data);
  console.log(response.data);
  return response;
};

export const logout = async () => {
  const response = await backendApi.get("users/logout");
  console.log(response);
  return response;
};
