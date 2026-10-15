import 'dotenv/config'


const config = {

    SMTP_USER : process.env.EMAIL_USER,
    SMTP_PASS : process.env.EMAIL_PASS
}

export default config