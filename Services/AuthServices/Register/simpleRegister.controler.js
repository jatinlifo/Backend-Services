
/* This is simple register page like we have
only some field then we can use this code
 */

import RegisterSchema from '../mongoDB-models/register.schema.js';
import bcrypt from 'bcrypt';

const simpleRegister = async (req, res) => {

    const { username, email, password } = req.body;

    try {

        if (!username || !email || !password) {
            return res.status(401)
                .json({
                    success: false,
                    message: "All field are required"
                })
        }

        const existingEmail = await RegisterSchema.findOne({ email });

        if (existingEmail) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        const existingName = await RegisterSchema.findOne({ username });

        if (existingName) {
            return res.status(409).json({
                message: "Name already exists"
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("After hashing the password", hashedPassword);

        const user = await RegisterSchema.create(
            {
                username,
                email,
                password : hashedPassword
            }
        );
        return res.status(201)
            .json({
                success: true,
                message: "User Register successfully",
                userData: user
            })

    } catch (error) {

        return res.status(401)
            .json({
                success: false,
                message: `Register faild error ${error}`
            })
    }
}

export default simpleRegister;