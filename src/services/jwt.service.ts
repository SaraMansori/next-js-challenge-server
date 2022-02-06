import JWT from 'jsonwebtoken';

export const JWTSignup = (userId: string, username: string): string => {
  return JWT.sign({ username }, 'PRIVATEKEY', {
    subject: userId,
    expiresIn: '5d'
  });
};

interface Verify {
  sub: string;
  username: string;
}

export const JWTVerify = (token: string): Verify => {
  return JWT.verify(token as string, 'PRIVATEKEY') as Verify;
};
