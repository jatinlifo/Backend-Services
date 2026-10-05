import { body } from 'express-validator';

const registerWithExpressValidator = [

    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Invalid email"),

    body("password")
        .trim()
        .isLength({min : 8, max : 20})
        .withMessage("Password must be at least 8 characters"),

    body("confirmPassword")
        .custom((value, {req} ) => {
            return value === req.body.password;
        })
        .withMessage("Passwords do not match"),

    body("dob")
        .isISO6391()
        .withMessage("Invalid data"),

    body("phoneNo")
        .isMobilePhone("en-In")
        .withMessage("Invalid phone number")
];

export default registerWithExpressValidator;