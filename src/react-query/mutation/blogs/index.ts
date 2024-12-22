import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { createBlog, updateBlog } from "../../../supabase/blogs";
import { Blog } from "../../../supabase/blogs/index.types";
import { useBlogCreatesmutationkeys, useBloguUpdatesmutationkeys } from "./hooks/useBlogsmutationkeys";


export const useUpdateBlog = (id: string): UseMutationResult<Blog, Error, Partial<Blog>, unknown> => {
  const { Update } = useBloguUpdatesmutationkeys();
  return useMutation<Blog, Error, Partial<Blog>, unknown>({
    mutationKey: [Update],
    mutationFn: async (payload: Partial<Blog>): Promise<Blog> => {
      const updatedBlog = await updateBlog(id, payload);
      if (!updatedBlog) {
        throw new Error("Blog update failed");
      }
      return updatedBlog;
    },
  });
};


export const useCreateBlog = (): UseMutationResult<
  Blog,
  Error,
  { payload: Partial<Blog>; user: string }
> => {
  const { Create } = useBlogCreatesmutationkeys();

  return useMutation<Blog, Error, { payload: Partial<Blog>; user: string }>({
    mutationKey: [Create],
    mutationFn: async ({ payload, user }) => {
      const newBlog = await createBlog({ payload, user });

      return newBlog;
    },
  });
};

