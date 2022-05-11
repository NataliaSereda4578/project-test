const jwt = require('jsonwebtoken');
const Users = require('../../shemas/userSchema');

const checkToken = (req, res, next) => {
  const token = req.cookies.token || req.query.token;

  if (!token) {
    res.status(401).send('Token not valid');
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send(err.message);
    }
    if (decoded) {
      // eslint-disable-next-line no-underscore-dangle
      Users.findOne({ _id: decoded.data._id })
        .then((result) => {
          req.user = result;
          next();
        })
        .catch((err) => res.status(404).send('Token doest exist'));
    } else {
      res.status(401).send(err.message);
    }
  });
};

module.exports = checkToken;
