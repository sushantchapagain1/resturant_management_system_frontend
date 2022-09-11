import { backendApi } from "../utils/api";

type categoryData = {
  name: string;
};

export const getCategory = async () => {
  const response = await backendApi.get("/category");
  return response;
};

export const addCategory = async (data: categoryData) => {
  const response = await backendApi.post("/category", data);
  console.log(response);
  return response;
};
