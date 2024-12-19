import { useQuery } from "@tanstack/react-query";
import { getBlogById, getBlogs } from "../../../supabase/blogs";

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blogs-list"],
    queryFn: getBlogs,
  });
};
export const useGetBlogsById = (id: string) => {
  return useQuery({
    queryKey: ["one-blog"],
    queryFn: () => getBlogById(id),
  });
};
