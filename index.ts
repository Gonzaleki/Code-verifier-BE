import express, { Express, Request, Response } from "express"; 
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config(); // make use of .env file

// Create the application express
const app: Express = express();
const port: string | number = process.env.PORT || 8000; // in case the variable is missing

// Define the first route of APP
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Express + TypeScript + Swagger + Mongoose');
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/message', (req: Request, res: Response) => {
    res.status(200).json({data:{message: "Goodbye, world"}})
});

// Execute App and listen on port
app.listen(port, ()=>{
    console.log(`EXPRESS Server: Running on http://localhost:${port}`);
})