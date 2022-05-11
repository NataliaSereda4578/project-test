const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const signature = process.env.JWT_KEY;
  const expiresIn = '6000h';
  const data = {
    // eslint-disable-next-line no-underscore-dangle
    _id: user._id,
    email: user.email,
  }

  return jwt.sign({data}, signature, {expiresIn});
}

module.exports = generateToken;