import { z } from "zod";

export const registerSchemaWithZodValidator = z.object(
    {
        username: z
            .string()
            .trim()
            .min(3, "Username must be at least 3 characters")
            .max(30, "Username must not exceed 30 characters"),

        surname: z
            .string()
            .trim()
            .max(30, "Surname must not exceed 30 characters")
            .optional(),
        
        middleName: z
            .string()
            .trim()
            .max(30, "Middlename must not exceed 30 characters")
            .optional(),

        familyName: z
            .string()
            .trim()
            .max(30, "FamilyName must not exceed 30 characters")
            .optional(),

        preferName: z
            .string()
            .trim()
            .max(30, "FamilyName must not exceed 30 characters")
            .optional(),
        
        email : z
            .string()
            .trim()
            .email("Invalid Email Address"),
        
        password: z
            .string()
            .min(8, "Password must be 8 characters")
            .max(100, "Password must not exceed 100 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(/[^A-Za-z0-9]/, "Password must contain at least special character"),

        confirmPassword: z
            .string()
            .min(1, "Confirm password is required"),

        dob: z.iso.date(),

        phoneNo : z
            .string()
            .trim()
            .regex(/^[6-9][0-9]{9}$/, "Invalid Indian phone number"),
    }
).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }
);

