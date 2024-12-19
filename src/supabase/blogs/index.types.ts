export type Blog = {
  id: number;
  created_at: string;
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_url: string;
  user_id: string;
};
export type BlogsForm = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_url: File | null;
};
