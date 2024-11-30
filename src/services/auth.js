import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { UsersCollection } from '../db/models/user.js';

export const registerUser = async (newUser) => {
  const user = await UsersCollection.findOne({ email: newUser.email });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(newUser.password, 10);

  return await UsersCollection.create({
    ...newUser,
    password: encryptedPassword,
  });
};
