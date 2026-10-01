import mongoose, {Schema} from "mongoose";

const WithExpressValidatorSchema = new Schema(
    {
        username: {
            type : String,
            required: true,
            unique: true,
        },
        surname: {
            type: String,
        },
        middlename: {
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
            required: true,
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

const WithExpressValidator = mongoose.model('WithExpressValidator', WithExpressValidatorSchema);

export default WithExpressValidator;