require('dotenv').config();
const express = require('express');
const cors=require('cors');

 const db = require('./config/db');

class App {
  constructor() {
     this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    db.connectDB();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors({ origin: true, credentials: true }));
    this.express.use(express.urlencoded({
        extended: true
    }));
    this.express.get('/', (req, res) => res.send('!!Ticket management System!!'));
  }

  routes() {
    const ticketRouter = require('./api/ticket');
    const userRouter = require('./api/user');

    this.express.use('/tickets', ticketRouter);
    this.express.use('/users', userRouter);
  }
}

module.exports = new App().express;
