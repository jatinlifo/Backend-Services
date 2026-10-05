import { validationResult } from "express-validator";

export const registerMiddlewareUsingExpressValidator = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400)
        .json({
            success: false,
            message: "Register validator middleware error using express validator",
            errors: errors.array(),
        })
    }

    next();
}