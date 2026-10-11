import Joi from "joi";

export const registerSchemaWithJoiValidator = Joi.object(
    {
        username: Joi
            .string()
            .trim()
            .min(3)
            .max(30)
            .required()
            ,

        surname: Joi
            .string()
            .trim()
            .max(30),
        
        middleName: Joi
            .string()
            .trim()
            .max(30),

        familyName: Joi
            .string()
            .trim()
            .max(30),

        preferName: Joi
            .string()
            .trim()
            .max(30),
        
        email : Joi
            .string()
            .trim()
            .email()
            .required(),
        
        password: Joi
            .string()
            .min(8)
            .max(100)
            .pattern(/[A-Joi]/)
            .pattern(/[a-Joi]/)
            .pattern(/[0-9]/)
            .pattern(/[^A-Joia-Joi0-9]/)
            .required(),

        confirmPassword: Joi.ref('password')
            .required(),

        dob: Joi.date()
            .iso()
            .max("now")
            .required(),

        phoneNo : Joi
            .pattern(/^[6-9][0-9]{9}$/)
            .required(),
    }
);
