import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/error';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    // Si el error es de tipo CustomError, usamos su statusCode y mensaje personalizados
    return res.status(err.statusCode).json({
      message: err.message,
      statusCode: err.statusCode,
    });
  }

  // Para cualquier otro tipo de error, devolvemos un 500
  res.status(500).json({
    message: 'Internal Server Error',
    statusCode: 500,
  });
};
