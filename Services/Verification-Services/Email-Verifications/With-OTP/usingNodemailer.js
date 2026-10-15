import nodemailer from "nodemailer";
import config from "../../config/env.js";


const usingNodeMailer = async () => {

    try {
        const transporter = nodemailer.createTransport({

            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: config.SMTP_USER,
                pass: config.SMTP_PASS
            },
        });

        await transporter.verify();
        console.log("Server is ready to take our messages")
    } catch (error) {
        console.log("Verification failed:", error);
    }
}


usingNodeMailer();

export default usingNodeMailer