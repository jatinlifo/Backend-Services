import 'dotenv/config'

const config = {
    port : process.env.PORT || 3000,
    mongoDB_URI : process.env.MONGODB_URI,
    mongoDB_Name : process.env.MONGODB_NAME
}

export default config;