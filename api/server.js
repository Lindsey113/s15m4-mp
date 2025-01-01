const express = require("express");

const Something = require("./something/something-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  })

  server.get("/something", (req, res) => {
    Something.getAll()
      .then(something => {
        res.status(200).json(something);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })

module.exports = server