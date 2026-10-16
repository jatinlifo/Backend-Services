import generateOTP from "../utils/otpLogic.utils.js";

// using Nodemailer service
import sendOTPUsingNodeMailer from "./With-OTP/usingNodemailer.js";

// using Resend API service
import sendOTPUsingResendAPI from "./With-OTP/usingResendAPI.js";


const testOTP = async () => {

    try {

        const otp = generateOTP();

        // using nodemailer
        // await sendOTPUsingNodeMailer("jatindev82@gmail.com", otp);

        // using resend api
        await sendOTPUsingResendAPI("jatindeg82@gmail.com", otp)

        console.log("OTP email sent successfully");

    } catch (error) {
        console.log("OTP email failed:", error.message);
    }
}

testOTP();




