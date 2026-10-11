import { registerSchemaWithJoiValidator } from "../validators/registerWithJoiValidator"

export const registerMiddlewareUsingJoiValidator = async (req, res , next) => {

    try {

        const {validatedData, error} = registerSchemaWithJoiValidator.validate(req.body);

        if (error) {
            return res.status(400)
            .json({
                success: false,
                errors: error.details.map((item) => item.message)
            })
        }

        req.validatedData = validatedData;

        next();
    } catch (error) {

        return res.status(402)
        .json({
            success: false,
            message: "Joi Validation server error"
        })

        // next(error);
    }
}