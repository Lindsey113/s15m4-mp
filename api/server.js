const express = require("express");

const Something = require("./something/something-model.js");

const server = express();

server.use(express.json());

module.exports = server