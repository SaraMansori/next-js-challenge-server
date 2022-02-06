import { IUser } from "../interfaces/models.interface";
import UserModel from '../models/user.model';
import { JWTSignup } from './jwt.service';

export const signup = async ({ username, password }: IUser):
  Promise<{ username: string; token: string }> => {

  //TODO: HANDLE ERRORS
  const users = await UserModel.find({ username: username })

  if (users[0]) {
    throw new Error('Username already exists')
  } else {
    //TODO: HANDLE ERRORS
    const savedUser = await UserModel.create({ username: username, password: password })

    return {
      username: savedUser.username,
      token: JWTSignup(savedUser.id, savedUser.username!),
    };
  }
};

export const login = async ({
  username,
  password
}: Partial<IUser>): Promise<{ username: string; token: string }> => {

  const users = await UserModel.find({ username: username }).select('password username');
  const user = users[0];

  if (!user || !user.validatePassword(password as string)) {
    throw new Error('Incorrect data')
  }

  return {
    username: user.username,
    token: JWTSignup(user.id, user.username!),
  };
};