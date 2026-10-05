
/*
This is high level register page has multiple fields
like name, surname, age, middle name, phone, email, etc
has many fields then we need to store all fileds in our DB
then we need to check every field manually then we will using 
express validator to validate all fields
*/

import bcrypt from 'bcrypt';
import WithExpressValidator from '../mongoDB-models/withExpressValidator.schema.js';
import { matchedData } from 'express-validator';


const withExpressValidator = async (req, res) => {

    try {
        const data = matchedData(req);
        
        const username = data.username;
        const email = data.username;
        const phoneNo = data.phoneNo;

        const existingUsername = await WithExpressValidator.findOne({username});
        const existingEmail = await WithExpressValidator.findOne({email});
        const existingPhoneNo = await WithExpressValidator.findOne({phoneNo});

        if (existingUsername) {
            return res.status(409)
            .json({
                success: false,
                message: "Name already taken"
            })
        }
         if (existingEmail) {
            return res.status(409)
            .json({
                success: false,
                message: "Email already exist"
            })
        }
         if (existingPhoneNo) {
            return res.status(409)
            .json({
                success: false,
                message: "Phone Number already exist"
            })
        }
        
        const password = req.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        data.password = hashedPassword;

        const user = await WithExpressValidator.create(data);

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