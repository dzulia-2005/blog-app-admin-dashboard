import { Session, User, WeakPassword } from "@supabase/supabase-js";

export interface RegisterProps {
    email: string;
    password: string;
  }
  export interface LoginResponse {
    data: {
      user: User;
      session: Session;
      weakPassword?: WeakPassword;
    };
    error: null;
  }