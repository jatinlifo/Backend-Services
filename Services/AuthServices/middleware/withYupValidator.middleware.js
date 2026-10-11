import registerSchemaWithYupValidator from "../validators/registerWithYupValidator";

export const registerMiddlewareUsingYupValidator = async (req, res, next) => {

    try {

        const validatedData = await registerSchemaWithYupValidator(req.body);

        req.validatedData = validatedData;

        next();

    } catch (error) {

        if (error.name === "ValidationError") {
            return res.status(400)
            .json({
                success: false,
                errors : error.errors,
                message: "Yup Validation error"
            })
        }

        next(error);
    }
}