const User = require("../models/user.models");

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
    };
  } catch (err) {
    return { error: "Ocurrió un error al buscar el usuario", status: 500 };
  }
};
const postUserService = async (req) => {
  try {
    const newUser = req.body;
    await User.create(newUser);
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
