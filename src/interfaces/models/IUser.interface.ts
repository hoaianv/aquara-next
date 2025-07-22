export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: string;
  provider: "google" | "credentials";
  status: boolean;
  address?: string;
  birthday?: Date;
  phone?: string;
  email: string;
  brand: string;
}
