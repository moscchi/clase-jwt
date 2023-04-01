const { loginService } = require("../service/authService");

const authLoginController = async (req, res) => {
    const login = await loginService(req);
    if(login.status === 401) return res.status(401).json(login)
    res.json({message: "Login success", token: login})
 };
 
 module.exports = { authLoginController }