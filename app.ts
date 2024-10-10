import express from 'express';
import { createUserRoutes } from './routes/user';
import { createAuthRoutes } from './routes/auth';
import { config } from './config/auth';
import cookieParser from 'cookie-parser';
import { createEventRoutes } from './routes/event';
import { createConfigRoutes } from './routes/config';
import { swaggerParams } from './config/swagger';
import path from 'path';


const app = express();
app.use(express.json());
app.use(cookieParser());

// Configurar Swagger
app.use(
    '/api-docs', 
    express.static('node_modules/swagger-ui-dist/', {index: false}),
    swaggerParams.swaggerUI, 
    swaggerParams.swaggerSetup
);

  // Serve the Swagger UI static assets (CSS, JS, etc.)
  app.use('/api-docs', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist')));
  app.use('/api-docs/swagger-ui.css', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist/swagger-ui.css')));
  app.use('/api-docs/swagger-ui-bundle.js', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist/swagger-ui-bundle.js')));
  app.use('/api-docs/swagger-ui-standalone-preset.js', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js')));
  app.use('/api-docs/swagger-ui-init.js', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist/swagger-ui-init.js')));
  
  

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