import express from 'express';
import { createUserRoutes } from './routes/user';
import { createAuthRoutes } from './routes/auth';
import { config } from './config/auth';
import cookieParser from 'cookie-parser';
import { createEventRoutes } from './routes/event';
import { createConfigRoutes } from './routes/config';


const app = express();
app.use(express.json());
app.use(cookieParser());

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