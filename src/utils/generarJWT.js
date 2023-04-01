const jwt = require('jsonwebtoken')
require('dotenv').config();

const generarJWT = (email) => {
   const payload = { email };
   const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '4h'})
   return token;
}

module.exports = { generarJWT }