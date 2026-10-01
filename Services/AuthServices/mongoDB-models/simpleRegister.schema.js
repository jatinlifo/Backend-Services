import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const simpleRegisterSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email : {
            type : String,
            required: true,
            unique: true,
        },
        password : {
            type : String,
            required: true,
            select: false
        }
    }, {timestamps: true}
)

const SimpleRegister = mongoose.model("SimpleRegister", simpleRegisterSchema);

export default SimpleRegister;