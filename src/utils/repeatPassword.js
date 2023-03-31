const repeatPasswordMiddleware = (req, res, next) => {
    if(req.body.password !== req.body.repeatPassword) return res.status(400).json({ message: "Las contraseñas deben ser iguales."})
    next();
  };

module.exports = repeatPasswordMiddleware