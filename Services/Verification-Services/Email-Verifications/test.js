import generateOTP from "../utils/otpLogic.utils.js";
import sendOTPUsingNodeMailer from "./With-OTP/usingNodemailer.js";

const testOTP = async () => {

    try {

        const otp = generateOTP();

        await sendOTPUsingNodeMailer("jatindev82@gmail.com", otp);

        console.log("OTP email sent successfully");

    } catch (error) {
        console.log("OTP email failed:", error.message);
    }
}

testOTP();