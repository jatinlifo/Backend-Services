import {Resend} from 'resend';
import config from '../../verification-config/env.js';

const resend = new Resend(config.RESEND_API_KEY)

const sendOTPUsingResendAPI = async(email, otp) => {

    try {

        const {data, error} = await resend.emails.send({
            from: `Testing <${config.FROM_EMAIL}>`,
            to: [email],
            subject: 'Hello World',
            html: '<strong>It works!</strong>',
        });

        if  (error) {
            throw new Error(error.message);
        }

        console.log("Resend API data", {data})

    } catch (error) {
        console.log("Otp send failed using Resend API", error)
    }
}

export default sendOTPUsingResendAPI;