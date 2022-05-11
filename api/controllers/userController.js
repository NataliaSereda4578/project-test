const Users = require('../shemas/userSchema');
const { generateToken } = require('../servises/authService');
// const hashNode = require('../../utils/hashNode');

// const SALT_ROUNDS = parseInt(process.env.SALT, 10);

const newUser = async (req, res) => {
  const { email, fullname, password } = req.body || {};
  if (!password || !email) {
    res.status(400).send('ERR: missing required fields');
    return;
  }

  const user = {
    email,
    fullname,
  };

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).send('Somthing goes wrong');
    } else {
      user.password = hash;
      const newUser = new Users(user);

      newUser
        .save()
        .then((result) => {
          let token = generateToken({ email: result.email, _id: result._id });
          res.cookie('token', token, {
            secure: false,
            maxAge: 900000,
            httpOnly: true,
          });
          res.status(201).send('User Created');
        })
        .catch((err) => {
          res.send(err._message);
          return;
        });
    }
  });

  // user.password = await hashNode(JSON.stringify(password, SALT_ROUNDS));
  // const createUser = new Users(user);

  // createUser
  //   .save()
  //   .then((result) => {
  //     const token = generateToken({ email: result.email, _id: result._id });
  //     res.cookie('token', token, {
  //       secure: false,
  //       maxAge: 900000,
  //       httpOnly: true,
  //     });
  //     res.status(201).send('User Created');
  //   })
  //   .catch((error) => {
  //     res.send(error._message);
  //   });
};

const userLogin = async (req, res) => {
  const { password, email } = req.body;

  // const checkHashPassword = await hashNode(
  //   JSON.stringify(password, SALT_ROUNDS)
  // );

  Users.findOne({ email })
    .then((result) => {
      bcrypt.compare(password, result.password, (err, checked) => {
        if (checked) {
          let token = generateToken({ email: result.email, _id: result._id });

          res.cookie('token', token, {
            secure: false,
            maxAge: 900000,
            httpOnly: true,
          });
          res.status(201).send('Success');
        } else {
          res.status(400).send('wrong pass');
        }
      });
      // if (checkHashPassword === result.password) {
      //   const token = generateToken({ email: result.email, _id: result._id });

      //   res.cookie('token', token, {
      //     secure: false,
      //     maxAge: 900000,
      //     httpOnly: true,
      //   });
      //   res.status(201).send('Success');
      // } else {
      //   res.status(400).send('wrong pass');
      // }
    })
    .catch((err) => res.status(404).send('User not found!'));
};

const getUserInfo = (req, res) =>
  res.send({ _id: req.user._id, email: req.user.email, image: req.user.image });
const logout = (req, res) => res.clearCookie('token').send();
module.exports = {
  newUser,
  userLogin,
  getUserInfo,
  logout,
};
