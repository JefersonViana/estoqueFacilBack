export interface IUsers extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  updatedAt: Date;
  createdAt: Date;
}