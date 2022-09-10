import axois from "axios";

export const url = "http://localhost:3000/api/";

export const backendApi = axois.create({
  baseURL: url,
  withCredentials: true,
});
