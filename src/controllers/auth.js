import { UsersCollection } from '../db/models/user';

export const registerUserController = async (req, res) => {
  const user = UsersCollection(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
