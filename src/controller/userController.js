const { getUserService, postUserService } = require("../service/userService");

const getUserController = async (req, res) => {
    const user = await getUserService(req);
    if(user.status === 404) return res.status(404).json(user)
    if(user.status === 500) return res.status(500).json(user)
    res.status(200).json(user)
};
const postUserController = async (req, res) => {
    const user = await postUserService(req);
    if(user.status === 400) return res.status(400).json(user);
    if(user.status === 500) return res.status(500).json(user)
    res.status(201).json(user);
};
const putUserController = async (req, res) => {};
const deleteUserController = async (req, res) => {};

module.exports = {
  getUserController,
  postUserController,
  putUserController,
  deleteUserController,
};
