
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { login, logout } from "../../../supabase/auth";
import { AuthError, PostgrestError } from "@supabase/supabase-js";
import { LoginResponse, RegisterProps } from "./types";
import { useAuthmutationkeys, useLogoutmutationkeys } from "@/react-query/mutation/auth/hooks/useAuthmutationkeys";

export const useLogin = (): UseMutationResult<
  LoginResponse,
  PostgrestError,
  RegisterProps
> => {
  const {Login} = useAuthmutationkeys()
  return useMutation<LoginResponse, PostgrestError, RegisterProps>({
    mutationKey: [Login],
    mutationFn: login,
  });
};


export const useLogOut = (): UseMutationResult<
  { error: AuthError | null },
  PostgrestError,
  void
> => {
  const {Logout} = useLogoutmutationkeys()
  return useMutation<{ error: AuthError | null }, PostgrestError, void>({
    mutationKey: [Logout],
    mutationFn: logout,
  });
};

