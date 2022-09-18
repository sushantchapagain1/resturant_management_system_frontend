import { backendApi } from "../utils/api";

type loginData = {
  email: string;
  password: string;
};

type signUpData = {
  name: string;
  email: string;
  password: string;
  id?: string;
};

type EditData = {
  name: string;
  email: string;
  id?: string;
  role: string;
};

export const login = async (data: loginData) => {
  const response = await backendApi.post("users/login", data);
  return response;
};

export const signup = async (data: signUpData) => {
  const response = await backendApi.post("users/signup", data);
  return response;
};

export const getUsers = async () => {
  const response = await backendApi.get("users");
  return response;
};

export const logout = async () => {
  const response = await backendApi.get("users/logout");
  return response;
};

export const deleteUser = async (id: string) => {
  const response = await backendApi.delete(`/users/${id}`);
  return response;
};

export const getUserByID = async (id: string) => {
  const response = await backendApi.get(`/users/${id}`);
  return response;
};

export const updateUser = async (data: EditData) => {
  const response = await backendApi.patch(`/users/${data.id}`, data);
  return response;
};
