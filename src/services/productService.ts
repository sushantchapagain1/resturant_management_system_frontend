import { backendApi } from "../utils/api";

// type ProductData = {
//   name: string;
//   id?: string;
// };

export const getProduct = async () => {
  const response = await backendApi.get("/products");
  return response;
};

// export const getCategoryByID = async () => {
//   const response = await backendApi.get("/category/:id");
//   return response;
// };

// export const addCategory = async (data: categoryData) => {
//   const response = await backendApi.post("/category", data);
//   console.log(response);
//   return response;
// };

// export const updateCategory = async (data: categoryData) => {
//   const response = await backendApi.patch(`/category/${data.id}`, data);
//   console.log(response);
//   return response;
// };

// export const deleteCategory = async (id: string) => {
//   const response = await backendApi.delete(`/category/${id}`);
//   return response;
// };
