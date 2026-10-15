import nodemailer from "nodemailer";
import config from "../../verification-config/env.js";

// console.log(config.SMTP_USER, config.SMTP_PASS)

// console.log(process.env.EMAIL_PASS)

const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS
    },
});

const sendOTPUsingNodeMailer = async (email, otp) => {

    try {
        // await transporter.verify();
        // console.log("Server is ready to take our messages")

        const info = await transporter.sendMail({
            from: `"Nodemailer Service" <${config.SMTP_USER}>`,
            to: email,
            subject: "Verify your email address",
            text: `Your OTP is ${otp}. It expires in 5 minutes.`,
            html: `
                <h2>Email Verifications</h2>
                <p>Your verification code is:</p>
                <h1>${otp}</h1>
                <p>This code expires in 5 minutes.</p>
                <p>If you did not request this code, ignore this email.</p>
            `
        });

        // console.log("Message sent: %s", info.messageId);

        // console.log("Accepted:", info.accepted);
        // console.log("Rejected:", info.rejected);
        // console.log("Response:", info.response);

        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (error) {
        console.log("Verification failed:", error);
    }
}


export default sendOTPUsingNodeMailer;