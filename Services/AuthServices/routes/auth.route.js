import express from 'express';



const authRouter = express.Router();


// simple register service
import simpleRegister from '../Register/simpleRegister.controler.js';

authRouter.post('/simple-register', simpleRegister);


// with express validator service
import withExpressValidator from '../Register/withExpressValidator.controller.js';
import registerSchemaWithExpressValidator from '../validators/registerWithExpressValidator.js';
import { registerMiddlewareUsingExpressValidator } from '../middleware/withExpressValidator.middleware.js';

authRouter.post('/express-validator-register',
    registerSchemaWithExpressValidator,
    registerMiddlewareUsingExpressValidator,
    withExpressValidator);



// with zod validator service
import withZodValidator from '../Register/withZod.controller.js';
import { registerSchemaWithZodValidator } from '../validators/registerWithZodValidator.validator.js';
import { registerMiddlewareUsingZodValidator } from '../middleware/withZodValidator.middleware.js';


authRouter.post('/zod-validator-register', 
    registerMiddlewareUsingZodValidator(registerSchemaWithZodValidator),
    withZodValidator
)

export default authRouter;