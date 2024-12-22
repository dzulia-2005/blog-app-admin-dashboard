/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "..";
import { Blog } from "./index.types";

export const getBlogs = async () => {
  const { data } = await supabase.from("blogs").select();
  return data as Blog[];
};
export const getBlogById = async (id: string) => {
  return await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single()
    .throwOnError()
    .then((res) => res.data);
};
export const updateBlog = async (id: string, payload: Partial<Blog>) => {
  return await supabase
    .from("blogs")
    .update(payload)
    .eq("id", id)
    .throwOnError()
    .then((res) => res.data);
};


export const createBlog = async ({
  payload,
  user,
}: {
  payload: Partial<Blog>;
  user: string;
}): Promise<Blog> => {
  const { data, error } = await supabase
    .from("blogs")
    .insert({ ...payload, user_id: user })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("No blog was created.");
  }

  return data; // Ensure we return the created blog
};
