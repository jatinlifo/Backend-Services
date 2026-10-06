import app from './app.js'
import express from 'express';
import config from './config/env.js'

import connectMongoDB from './database/mongoDB.js';

import authRouter from './routes/auth.route.js';


const port = config.port || 3000;

// add middleware
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/auth", authRouter);

const startServer = async () => {

    try {

        await connectMongoDB();
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`)
        })
    } catch (error) {
        console.log('Server running failed error', error);
    }
}

startServer();