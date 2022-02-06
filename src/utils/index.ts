import bcrypt from 'bcrypt';

export const encryptPassword = (password: string): string =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

