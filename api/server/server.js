// Server Imports
const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
// Server Setup
const server = express();
//set router
const contactInfo = require('./../routers/contact-Router')
server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/contact', contactInfo);
// Simple GET request
server.get("/", (req, res) => {
    res.status(200).json({
      message: "It's alive!"
    });
  });
module.exports = server;