"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config(); // make use of .env file
// Create the application express
const app = (0, express_1.default)();
const port = process.env.PORT || 8000; // in case the variable is missing
// Define the first route of APP
app.get('/', (req, res) => {
    res.send('Welcome to the Express + TypeScript + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
// Execute App and listen on port
app.listen(port, () => {
    console.log(`EXPRESS Server: Running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map