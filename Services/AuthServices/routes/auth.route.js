import express from 'express';


import simpleRegister from '../Register/simpleRegister.js';

const authRouter = express.Router();

// simple register
authRouter.post('/simple-register', simpleRegister);

export default authRouter;