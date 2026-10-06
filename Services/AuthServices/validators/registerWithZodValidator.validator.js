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
            .toLowerCase()
            .email("Invalid Email Address"),
        
        password: z
            .string()
            .min(8, "Password must be 8 characters")
            .max(100, "Password must not exceed 100 characters"),

        confirmPassword: z
            .string()
            .min(1, "Confirm password is required"),

        dob: z
            .string()
            .datetime({ offset: true })
            .or(z.string().date()),

        phoneNo : z
            .string()
            .trim()
            .regex(/^[6-9]\d{9}$/, "Invalid Indian phone number"),
    }
).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }
);

