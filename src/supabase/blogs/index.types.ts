export type Blog = {
  id: number | null ;
  created_at: string | null;
  title_ka: string | null;
  title_en: string | null;
  description_ka: string | null;
  description_en: string | null;
  image_url: string | null;
  user_id: string | null;
};
export type BlogsForm = {
  title_ka: string ;
  title_en: string ;
  description_ka: string ;
  description_en: string ;
  image_url: File |null;
};
