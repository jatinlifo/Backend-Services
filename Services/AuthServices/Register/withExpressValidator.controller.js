
/*
This is high level register page has multiple fields
like name, surname, age, middle name, phone, email, etc
has many fields then we need to store all fileds in our DB
then we need to check every field manually then we will using 
express validator to validate all fields
*/

import bcrypt from 'bcrypt';
import RegisterSchema from '../mongoDB-models/register.schema.js';
import { matchedData } from 'express-validator';


const withExpressValidator = async (req, res) => {

    try {
        const data = matchedData(req);

        delete data.confirmPassword;
        
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

        return res.status(402)
        .json({
            success: false,
            message : "Failed to register"
        })
    }
}

export default withExpressValidator;