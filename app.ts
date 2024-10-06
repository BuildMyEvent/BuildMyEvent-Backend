import express from 'express';
import { createUserRoutes } from './routes/user';
import { createAuthRoutes } from './routes/auth';
import { config } from './config/auth';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cookieParser());

//Load Routes
app.use('/users', createUserRoutes());
app.use('/auth', createAuthRoutes());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(config.port, () => {
    console.log('Server is running on port 3000');
});