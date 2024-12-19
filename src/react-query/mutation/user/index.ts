import { useMutation } from "@tanstack/react-query";
import { createUser, updateUser } from "../../../supabase/users";

export const useUpdateUser = (id: string) => {
  return useMutation({
    mutationKey: ["update-user"],
    mutationFn: (payload: { email: string; phone: string }) =>
      updateUser(id, payload),
  });
};
export const useCreateUser = () => {
  return useMutation({
    mutationKey: ["create-user"],
    mutationFn: createUser,
  });
};
