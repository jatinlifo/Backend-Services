import { ZodError } from "zod";

export const registerMiddlewareUsingZodValidator = (schema) => {

    return (req, res, next) => {

        try {

            const validatedData = schema.parse(req.body);

            req.validatedData = validatedData;

            next();

        } catch (error) {

            if (error instanceof ZodError) {

                return res.status(400)
                .json({
                    success: false,
                    message: "Validation failed",
                    errors: error.issues.map((issue) => ({
                        field: issue.path.join("."),
                        message: issue.message,
                    })),
                });
            }

            next(error);
        }
    }
}