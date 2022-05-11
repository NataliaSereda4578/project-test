const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const router = require('../api/router');

const app = next({ dev: true });
const { connectToDb } = require('./connectToDb');

const nextHandler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const { PORT } = process.env;
    const server = express();
    connectToDb();
    server.use(express.json({ limit: '10mb' }));
    server.use(cookieParser());
    server.use('/api', (req, res) => router(req, res));

    server.get('*', (req, res) => nextHandler(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`Server on ${PORT} port`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    process.exit(1);
  });
