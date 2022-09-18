import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userService";

export const useUsers = () => {
  const user = useQuery(["get-users"], getUsers);
  return user;
};
