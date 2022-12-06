const UserService = require('../services/userService');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const config = require('config');
require('dotenv/config');

const getAuth = async (req, res, next) => {
  const authReturn = await auth.autorizar(req.headers);
  if (authReturn.status == 401) {
    res.status(401).send(authReturn.error);
    return;
  }
  try {
    const _id = authReturn.json.id;
    const user = await UserService.getUserById({ _id }, null, null);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const login = async (req, res, next) => {
  check(
    check('email', 'Informe um email válido').isEmail(),
    check('password', 'Digite sua senha').exists,
  );

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await UserService.getUserByEmail(email);
    if (!user) {
      res.status(400).json({ errors: [{ msg: 'Credenciais inválidas!' }] });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ erros: [{ mdg: 'Credenciais inválidas!' }] });
      return;
    } else {
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token, user }).send('Logged-in user!');
        },
      );
      // res.json({token}).send('Logged-in user!');
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server error');
  }
};
module.exports = { getAuth, login };
