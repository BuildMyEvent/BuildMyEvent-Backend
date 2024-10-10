import dotenv from 'dotenv';

dotenv.config(); 

export const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";


// Configuración básica de Swagger
export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation | BuildMyEvent',
      version: '1.0.0',
      description: 'API de ejemplo documentada con Swagger',
    },
    servers: [
      {
        url: "https://api.buildmyevent.xyz",
      },
      {
        url: "http://localhost:3000",
      }
    ],
  },
  apis: [
    './controllers/*.ts',
    './routes/*.ts',
  ],
};


