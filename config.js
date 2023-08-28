// DOT ENV
const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    jwt: process.env.JWT_SECRET,
    frontendPort: process.env.FRONTEND
}
module.exports = config;