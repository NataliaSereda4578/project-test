const mongoose = require('mongoose');

module.exports.connectToDb = () => {
  const dbURL = process.env.DB_URL;

  mongoose
    .connect(dbURL)
    .then(() => console.log('Database connected'))
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
