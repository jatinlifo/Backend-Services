
import * as yup from "yup";

const registerSchemaWithYupValidator = yup.object({
    username: yup
        .string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .max(30, "Username must not exceed 30 characters")
        .required("Username is required"),

    surname: yup
        .string()
        .trim()
        .max(30, "Surname must not exceed 30 characters")
        .optional(),

    middleName: yup
        .string()
        .trim()
        .max(30, "Middle name must not exceed 30 characters")
        .optional(),

    familyName: yup
        .string()
        .trim()
        .max(30, "Family name must not exceed 30 characters")
        .optional(),

    preferName: yup
        .string()
        .trim()
        .max(30, "Preferred name must not exceed 30 characters")
        .optional(),

    email: yup
        .string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),

    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must not exceed 100 characters")
        .matches(/[A-Z]/, "Password must contain an uppercase letter")
        .matches(/[a-z]/, "Password must contain a lowercase letter")
        .matches(/[0-9]/, "Password must contain a number")
        .matches(/[^A-Za-z0-9]/, "Password must contain a special character")
        .required("Password is required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),

    dob: yup
        .date()
        .typeError("Invalid date of birth")
        .max(new Date(), "Date of birth cannot be in the future")
        .required("Date of birth is required"),

    phoneNo: yup
        .string()
        .matches(/^[6-9][0-9]{9}$/, "Invalid Indian mobile number")
        .required("Phone number is required")
}).noUnknown(true);

export default registerSchemaWithYupValidator;
