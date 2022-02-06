import { Request, Response, NextFunction } from "express"

export interface ITokenInfoReq extends Request {
  token?: string;
}

export const tokenMiddleware = (req: ITokenInfoReq, res: Response, next: NextFunction) => {

  //Authorization: Bearer <token>

  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next()
  } else {
    res.sendStatus(403)
  }
}

