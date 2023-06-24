import { IUserRegister, IUsers } from "../Interfaces/usersInterface";

export const buildUserToDb = ({ name, email, password }: IUserRegister): IUsers  => ({
  id: '5', // Criação do UUID
  name,
  email,
  password, // Criptografia com Bcrypt
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString()
})