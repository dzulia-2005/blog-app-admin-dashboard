import { useMutation } from "@tanstack/react-query";
import { createBlog, updateBlog } from "../../../supabase/blogs";
import { Blog } from "../../../supabase/blogs/index.types";

export const useUpdateBlog = (id: string) => {
  return useMutation({
    mutationKey: ["update-blog"],
    mutationFn: (payload: Partial<Blog>) => updateBlog(id, payload),
  });
};
export const useCreateBlog = () => {
  return useMutation({
    mutationKey: ["create-blog"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (variables: { payload: any; user: any }) =>
      createBlog(variables),
  });
};
