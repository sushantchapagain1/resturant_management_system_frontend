import { backendApi } from "../utils/api";

type productData = {
  name: string;
  price: number;
  categoryId: string;
  id?: string;
};

export const getProduct = async () => {
  const response = await backendApi.get("/products");
  return response;
};

export const getProductByID = async (id: string) => {
  const response = await backendApi.get(`/products/${id}`);
  return response;
};

export const addProduct = async (data: productData) => {
  const response = await backendApi.post("/products", data);
  console.log(response);
  return response;
};

export const updateProduct = async (data: productData) => {
  const response = await backendApi.patch(`/products/${data.id}`, data);
  console.log(response);
  return response;
};

export const deleteProduct = async (id: string) => {
  const response = await backendApi.delete(`/products/${id}`);
  return response;
};
