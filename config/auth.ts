import dotenv from 'dotenv';

dotenv.config(); 

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.SECRET_JWT_TOKEN || '',
};
