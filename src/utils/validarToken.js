const jwt = require('jsonwebtoken');

const validarToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({message: "Token no encontrado."});
    try {
        const { email } = jwt.verify(token, process.env.SECRET_KEY);
        if(!email) return res.status(401).json({message: "Token invalido"});
        next();
    } catch (error) {
        return res.status(401).json({message: "Token invalido."})
    }
}

module.exports = validarToken;