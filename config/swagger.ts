import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config(); 

// Configuración básica de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation | BuildMyEvent',
      version: '1.0.0',
      description: 'API de ejemplo documentada con Swagger',
    },
    servers: [
      {
        url: process.env.BASE_URL || 'http://localhost:'+process.env.PORT,
      },
    ],
  },
  apis: [
    './controllers/*.ts',
    './routes/*.ts',
  ],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};