import { useQuery } from "@tanstack/react-query";
import { getSingleUser, getUsers } from "../../../supabase/users";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users-list"],
    queryFn: getUsers,
  });
};
export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getSingleUser(id),
  });
};
