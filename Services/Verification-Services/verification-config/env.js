import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

// console.log(__filename);

const __dirname = path.dirname(__filename);

// console.log(__dirname);

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

const config = {
    SMTP_USER: process.env.EMAIL_USER,
    SMTP_PASS: process.env.EMAIL_PASS,

    RESEND_API_KEY: process.env.RESEND_API_KEY,
    FROM_EMAIL : process.env.FROM_EMAIL,
};

export default config;