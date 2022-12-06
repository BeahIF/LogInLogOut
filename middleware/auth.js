const jwt = require('jsonwebtoken');
const config = require('config');
const { head } = require('request');
const UserService = require('../services/userService');
const decodeToken = async function (token) {
  try {
    var data = await jwt.verify(token, process.env.JWT_TOKEN);
    return data;
  } catch (e) {
    return 'Opa! Você esqueceu de passar o token!';
  }
};

const isAdmin = async function (token) {
  const data = await decodeToken(token);
  if (data.user) {
    try {
      const _id = data.user.id;
      const user = await UserService.getUserById({ _id }, null, null);
      if (user.admin) {
        return true;
      }
      return false;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  } else {
    return false;
  }
};
const autorizar = function (headers) {
  return new Promise((resolve, reject) => {
    console.log(headers);
    const token = headers['x-auth-token'];
    console.log(token);
    if (!token) {
      return resolve({
        status: 401,
        error: 'Sem token não é possível autorizar!',
      });
    }
    //Verificando token
    try {
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      console.log(decoded);
      return resolve({
        status: 200,
        json: decoded.user,
      });
    } catch (err) {
      console.log(err);
      return resolve({
        status: 401,
        error: 'Token não é válido!',
      });
    }
  });
};
module.exports = { decodeToken, autorizar, isAdmin };
