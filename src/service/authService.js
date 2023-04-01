const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../utils/generarJWT");

const loginService = async (req) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return { status: 401, message: "Usuario o contraseña inválidos." };
  const validatePassword = bcrypt.compareSync(password, user.password);
  if (!validatePassword)
    return { status: 401, message: "Usuario o contraseña inválidos." };
  const token = generarJWT(email);
  return token;
};

module.exports = { loginService };
