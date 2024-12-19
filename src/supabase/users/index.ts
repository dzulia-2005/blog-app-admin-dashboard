import { supabase } from "..";
import { CreateUserPaylaod, User, UserPayload } from "./index.types";

export const getUsers = async () => {
  return supabase.auth.admin.listUsers().then((res) => {
    return res.data.users as User[];
  });
};
export const updateUser = (id: string, payload: UserPayload) => {
  return supabase.auth.admin.updateUserById(id, { ...payload });
};
export const createUser = async (payload: CreateUserPaylaod) => {
  return supabase.auth.admin.createUser(payload)
};
export const getSingleUser = async (id: string) => {
  return supabase.auth.admin.getUserById(id).then((res) => res.data.user);
};
