import mongoose, {Schema} from "mongoose";

const registerSchema = new Schema(
    {
        username: {
            type : String,
            required: true,
            unique: true,
        },
        surname: {
            type: String,
        },
        middleName: {
            type: String,
        },
        familyName: {
            type: String,
        },
        preferName: {
            type: String,
        },
        email : {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        confirmPassword : {
            type: String,
        },
        dob: {
            type: Date,
            required: true,
        },
        phoneNo : {
            type: String,
            required: true,
            unique: true,
        }
    },
    {timestamps: true}
)

const RegisterSchema = mongoose.model('RegisterSchema', registerSchema);

export default RegisterSchema;