import { IUserRegister, IUsers } from "../Interfaces/usersInterface";
import bcrypt from 'bcrypt'

export const buildUserToDb = ({ name, email, password }: IUserRegister): IUsers  => ({
  id: '5', // Criação do UUID
  name,
  email,
  password, // Criptografia com Bcrypt
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString()
})

export const checkUser = (pass: string, hash: string): boolean => {
  const isValid = bcrypt.compareSync(pass, hash)
  return isValid
}