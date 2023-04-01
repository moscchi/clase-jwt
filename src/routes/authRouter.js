const express = require("express");
const { authLoginController } = require("../controller/authController");
const validator = require("../utils/validator");
const { check } = require("express-validator");

const authRouter = express.Router();

authRouter.post(
  "/login",
  
    check("email", "El email es obligatorio").isEmail(),
    check("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
    validator,
  
  authLoginController
);

module.exports = authRouter;
