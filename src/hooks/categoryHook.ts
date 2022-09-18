import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/categoryService";

export const useCategory = () => {
  const category = useQuery(["get-category"], getCategory);
  return category;
};
