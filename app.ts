import express from 'express';
import { createUserRoutes } from './routes/user';
import { createAuthRoutes } from './routes/auth';
import { config } from './config/auth';
import cookieParser from 'cookie-parser';
import { createEventRoutes } from './routes/event';
import { createConfigRoutes } from './routes/config';
import { swaggerOptions, CSS_URL } from './config/swagger';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';



const app = express();
app.use(express.json());
app.use(cookieParser());

// Configurar Swagger
const specs = swaggerJsdoc(swaggerOptions);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { customCssUrl: CSS_URL })
);
  

//Load Routes
app.use('/users', createUserRoutes());
app.use('/auth', createAuthRoutes());
app.use('/events', createEventRoutes());
app.use('/config', createConfigRoutes());

app.get('/', (req, res) => {
    //Response Json
    res.json({ message: 'Hello we are BuildMyEvent' });
});

app.listen(config.port, () => {
    console.log('Server is running on port 3000');
});

export default app;