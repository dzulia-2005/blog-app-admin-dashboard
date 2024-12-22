import { useMutation } from "@tanstack/react-query";
import { createUser, updateUser } from "../../../supabase/users";
import { useUserCreatemutation, useUserUpdatemutation } from "./hooks/useUsermutation";

export const useUpdateUser = (id: string) => {
  const {userupdate} = useUserUpdatemutation()
  return useMutation({
    mutationKey: [userupdate],
    mutationFn: (payload: { email: string; phone: string }) =>
      updateUser(id, payload),
  });
};
export const useCreateUser = () => {
  const {userCreate}=useUserCreatemutation()
  return useMutation({
    mutationKey: [userCreate],
    mutationFn: createUser,
  });
};
