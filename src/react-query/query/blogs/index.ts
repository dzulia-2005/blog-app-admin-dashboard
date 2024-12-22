import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { getBlogById, getBlogs } from "../../../supabase/blogs";
import { Blog } from "@/supabase/blogs/index.types";
import { useBlogsquerykeys, useGetblogquerykeys } from "./hooks/useBlogsquerykeys";

export const useGetBlogs = <T = Blog[]>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog[], unknown, T>, "queryKey">;
  } = {}): UseQueryResult<T, unknown> => {
  const {blogs} = useBlogsquerykeys()

  return useQuery<Blog[], unknown, T>({
    queryKey: [blogs],
    queryFn: getBlogs,
    ...queryOptions,
  });
};


export const useGetBlogsById = <T = Blog | null>(
  id: string,
  { queryOption }: {
     queryOption?: Omit<UseQueryOptions<Blog | null, unknown, T>, "queryKey" | "queryFn">
    } = {}): UseQueryResult<T, unknown> => {
    const {oneblog} = useGetblogquerykeys()  
    
  return useQuery<Blog | null, unknown, T>({
    queryKey: [oneblog, id], 
    queryFn: () => getBlogById(id), 
    ...queryOption,
  });
};





