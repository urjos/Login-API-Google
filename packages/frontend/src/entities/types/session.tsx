export type Session = {
  userId: string;
  name: string;
  email: string;
  country?: string;
  picture?: string;
  username?: string;
  token: string;
  auth_provider: string;
};
