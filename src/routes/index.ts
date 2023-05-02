/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response} from 'express';
import helloRouter from './HelloRouter';
import { LogInfo} from '@/utils/logger';

// Server Instance
let server = express();

// Router Instance
let rootRouter = express.Router();

// Activate for requests to http://localhost:8000/api
// all petitions to /api get redirected from here

// GET -> http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    res.send('Welcome to the Express + TypeScript + Swagger + Mongoose');
});

// Redirections to routers & Controllers
server.use('/', rootRouter); // /api/
server.use('/hello', helloRouter); // /api/hello/
// Add more routes

export default server;

// VIDEO 41:47