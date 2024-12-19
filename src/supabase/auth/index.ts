import { supabase } from "..";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await supabase.auth.signInWithPassword({ email, password });
    if (res.error) {
      throw res.error;
    }
    return res;
  } catch (error) {
    console.log("logi failed");
    throw error;
  }
};

export const logout = async () => {
  return supabase.auth.signOut();
};
