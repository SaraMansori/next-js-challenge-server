import { Request, Response, NextFunction } from 'express';
import { signup, login } from '../services/auth.service';
import { JWTVerify } from '../services/jwt.service';

export const SignUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userData = req.body;
    const user = await signup(userData);
    res.status(201).json(user);
  } catch (err) {
    next(err)
  }
};

export const LogIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userData = req.body;
    const user = await login(userData);
    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}

export const VerifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { token } = req.body;
  try {
    res.status(200).json(JWTVerify(token));
  } catch (err) {
    next(err)
  }
}