import bcrypt from 'bcrypt';

import RegisterSchema from '../mongoDB-models/register.schema.js';


const withZodValidator = async (req, res, next) => {

    try {

        const data = req.validatedData;

        delete data.confirmPassword

        const existingUser = await RegisterSchema.findOne({
            $or: [
                {username: data.username},
                {email : data.email},
                {phoneNo : data.phoneNo}
            ]
        });

        if (existingUser) {

            const field = existingUser.username === data.username ? "Username" 
                          : existingUser.email === data.email ? "Email"
                          : "Phone number";
            
            return res.status(409)
            .json({
                success: false,
                message: `${field} already exists`
            });
        }


        const password = req.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        data.password = hashedPassword;

        const user = await RegisterSchema.create(data);

        return res.status(201)
        .json({
            success: true,
            userInfo : user,
        })

    } catch (error) {

        return res.status(401)
        .json({
            success: false,
            message: "Register failed using zod validator",
            error: error
        })
    }
}

export default withZodValidator;