export interface ISignUp {
  id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string[];
  // [auth] credentials
  username: string,
  password: string;
};
