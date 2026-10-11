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



// with zod validator service..
import withZodValidator from '../Register/withZod.controller.js';
import { registerMiddlewareUsingZodValidator } from '../middleware/withZodValidator.middleware.js';


authRouter.post('/zod-validator-register', 
    registerMiddlewareUsingZodValidator,
    withZodValidator
)


// with Joi validator service...
import withJoiValidator from '../Register/withJoi.controller.js';
import { registerMiddlewareUsingJoiValidator } from '../middleware/withJoiValidator.middleware.js';

authRouter.post('/joi-validator-register',
    registerMiddlewareUsingJoiValidator,
    withJoiValidator
)


// with AJV validator service..
import withAjvValidator from '../Register/withAjv.controller.js';
import { registerMiddlewareUsingAjvValidatorn } from '../middleware/withAjvValidator.middleware.js';

authRouter.post('/ajv-validator-register', 
    registerMiddlewareUsingAjvValidatorn,
    withAjvValidator
)

// with Yup validator service...
import withYupValidator from '../Register/withYup.controller.js';
import { registerMiddlewareUsingYupValidator } from '../middleware/withYupValidator.middleware.js';

authRouter.post('/yup-validator-register', 
    registerMiddlewareUsingYupValidator,
    withYupValidator
)

export default authRouter;