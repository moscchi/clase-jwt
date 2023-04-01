const User = require("../models/user.models");
const bcrypt = require("bcryptjs");

const getUserService = async (req) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return { error: "Usuario no encontrado", status: 404 };
    }
    return {
      username,
      age: user.age,
      email: user.email,
      password: user.password
    };
  } catch (err) {
    return { error: "Ocurrió un error al buscar el usuario", status: 500 };
  }
};
const postUserService = async (req) => {
  try {
    const newUser = req.body;
    //encriptar contraseñas
    const encodedPassword = bcrypt.hashSync(newUser.password);

    const newUserDB = new User({
      username: newUser.username,
      email: newUser.email,
      age: newUser.age,
      rol: newUser.rol,
      password: encodedPassword,
    });
    await newUserDB.save();
    return { message: "Usuario creado con exito" };
  } catch (error) {
    if (error.code === 11000)
      return { status: 400, mesage: "Error de duplicado:" + error.message };
    return { status: 500, error: "Error al crear usuario: " + error.message };
  }
};
const putUserService = () => {};
const deleteUserService = () => {};

module.exports = {
  getUserService,
  postUserService,
  putUserService,
  deleteUserService,
};
