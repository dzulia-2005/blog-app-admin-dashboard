export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  phone: string;
  confirmation_sent_at: string;
  app_metadata: {
    provider: string;
    providers: [string];
  };
  user_metadata: {
    email: string;
    email_verified: boolean;
    phone_verified: boolean;
    sub: string;
  };
  identities: null;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
export type UserPayload = {
  email: string;
  phone: string;
};
export type CreateUserPaylaod = {
  email: string;
  password: string;
  phone:string;
};
