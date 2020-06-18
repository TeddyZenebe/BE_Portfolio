// Server Imports
const express = require("express");
// Server Setup
const server = express();
// Simple GET request
server.get("/", (req, res) => {
    res.status(200).json({
      message: "It's alive!"
    });
  });
module.exports = server;