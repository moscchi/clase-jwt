const express = require("express");
const {
  getUserController,
  postUserController,
  putUserController,
  deleteUserController,
} = require("../controller/userController");
const { check } = require("express-validator");
const repeatPasswordMiddleware = require("../utils/repeatPassword");
const validator = require('../utils/validator');
const validarToken = require("../utils/validarToken");
const userRouter = express.Router();

userRouter.post(
  "/",
  //Validamos los campos que ingresa el usuario:
  check("age").isInt({ min: 18 }).withMessage("Debes ser mayor de 18 años"),
  check("email")
    .isEmail()
    .withMessage("Debe ser una dirección de correo electrónico válida"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/\d/)
    .withMessage("La contraseña debe contener al menos un número"),
    repeatPasswordMiddleware,
    validator,
  postUserController
);
userRouter.put("/:username", putUserController);
userRouter.delete("/:username", deleteUserController);

userRouter.get('/saludar', validarToken, (req, res) => {
  
  res.send('Hola clase pude entrar :) ')
})
userRouter.get("/:username", getUserController);

module.exports = { userRouter };
