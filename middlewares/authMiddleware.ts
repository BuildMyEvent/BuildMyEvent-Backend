import { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include session
declare module 'express-serve-static-core' {
  interface Request {
    session: { user: JwtPayload | null };
  }
}

import jwt from 'jsonwebtoken';
import { config } from '../config/auth';

interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction):void => {
  const token = req.cookies?.access_token;
  req.session = { user: null };
  
  if (!token) {
    res.status(401).json({ message: 'Access denied, token missing' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload;

    req.session.user = decoded;
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }

  next();
};
