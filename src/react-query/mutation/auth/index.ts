import { useMutation } from "@tanstack/react-query";
import { login, logout } from "../../../supabase/auth";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
};
export const useLogOut = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });
};
