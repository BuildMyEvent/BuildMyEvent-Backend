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

interface AuthenticatedUser {
    id: number;
    email: string;
  }


export const getCurrentUser = (req: Request): AuthenticatedUser | null => {
    const token = req.headers.authorization?.split(' ')[1]; // Obtener el token de la cabecera
  
    if (!token) {
      return null; // No hay token, por lo tanto no hay usuario autenticado
    }
  
    try {
      const decoded = jwt.verify(token, config.jwtSecret) as AuthenticatedUser;
      return decoded; // Retorna el usuario autenticado
    } catch (error) {
      return null; // Token inválido o expirado
    }
  };
  