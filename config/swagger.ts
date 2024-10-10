import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerWrapper } from "../swagger/swagger_wrapper";

export const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

// Genera las especificaciones de Swagger a partir de `swaggerWrapper`
const swaggerSpecs = swaggerJsdoc(swaggerWrapper);

// Configura opciones adicionales para Swagger UI
const options = {
  customCssUrl: CSS_URL,
};

// Exporta los parámetros para la configuración de Swagger en Express
export const swaggerParams = {
  swaggerUI: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerSpecs, options)
};
