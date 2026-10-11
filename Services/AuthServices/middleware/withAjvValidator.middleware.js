import Ajv from "ajv";
import addFormats from "ajv-formats"

import { registerSchemaWithAjvValidator } from "../validators/registerWithAjvValidator.js"

const ajv = new Ajv({allErrors: true});

addFormats(ajv);

const validate = ajv.compile(registerSchemaWithAjvValidator);


export const  registerMiddlewareUsingAjvValidatorn= async (req, res, next) => {

    const data = {...req.body};

    const isValid = validate(data);

    if (!isValid) {

        return res.status(400)
        .json({
            success: false,
            errors: validate.errors.map((error) => ({
                field:
                    error.instancePath ||
                    error.params.missingProperty ||
                    "request",
                message: error.message,
                myMsg: "Validation error using Ajv validation"
            }))
        });
    }

    if (data.password !== data.confirmPassword) {

        return res.status(400)
        .json({
            success: false,
            message: "Password and confirm password do not match"
        })
    }

    // Reject future data
    const dob = new Date(`${data.dob}T00:00:00Z`);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    if (dob > today) {

        return res.status(400)
        .json({
            success: false,
            message: "Date of birth cannot be in the future"
        })
    }

    req.validatedData = data;

    next();
};