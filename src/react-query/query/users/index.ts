import {  UseBaseQueryResult, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { getSingleUser, getUsers } from "../../../supabase/users";
import { User } from "@/supabase/users/index.types";
import { useUserquerykeys, useUsersquerykeys } from "./hooks/useUserquerykeys";

export const useGetUsers =<T = User[]> ({
  queryOptions ,
}:{
  queryOptions?:Omit<UseQueryOptions<User[],unknown,T>,"queryKey">;
}={}):UseBaseQueryResult<T,unknown> => {
  const {list} = useUsersquerykeys()
  return useQuery({
    queryKey: [list],
    queryFn: getUsers,
    ...queryOptions
  });
};


export const useGetUserById = <T = User | null>(
  id: string,
  { queryOption }: {
    queryOption?: Omit<UseQueryOptions<User | null, unknown, T>, "queryKey" | "queryFn">;
  } = {}
): UseQueryResult<T, unknown> => {
  const {user} = useUserquerykeys()

  return useQuery<User | null, unknown, T>({
    queryKey: [user, id],
    queryFn: async () => {
      const user = await getSingleUser(id);
      return user as User | null; 
    },
    ...queryOption,
  });
};
