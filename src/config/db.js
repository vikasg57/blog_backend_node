const mongoose = require("mongoose");

require('dotenv').config()

//connecting with mongoDB cloud server for database managment

const connect = () => {
  mongoose.connect(process.env.MONGOURI);
};

module.exports = connect;
