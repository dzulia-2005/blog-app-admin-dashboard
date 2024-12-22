export type User = {
  id: string | undefined;
  aud: string | undefined;
  role: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  confirmation_sent_at: string | undefined;
  app_metadata: {
    provider: string | undefined;
    providers: [string] | undefined;
  };
  user_metadata: {
    email: string | undefined;
    email_verified: boolean | undefined;
    phone_verified: boolean | undefined;
    sub: string|undefined;
  };
  identities: null | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
  is_anonymous: boolean | undefined;
};
export type UserPayload = {
  email: string | undefined;
  phone: string | undefined;
};
export type CreateUserPaylaod = {
  email: string| undefined;
  password: string| undefined;
  phone:string| undefined;
};