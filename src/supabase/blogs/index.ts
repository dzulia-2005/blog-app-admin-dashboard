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
  payload: any;
  user: any;
}) => {
  try {
    const res = await supabase.storage
      .from("blog_images")
      .upload(payload.image_url?.name, payload.image_url);


    const insertRes = await supabase.from("blogs").insert({
      title_ka: payload.title_ka,
      title_en: payload.title_en,
      description_ka: payload.description_ka,
      description_en: payload.description_en,
      image_url: res.data?.fullPath,
      user_id: user?.user.id,
    });

    if (insertRes.error) {
      throw new Error(insertRes.error.message);
    }
    console.log("Successfully created", insertRes);
  } catch (error) {
    console.error("Error creating blog:", error);
  }
};
