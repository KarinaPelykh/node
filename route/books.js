const express = require("express");

const route = express.Router();

const booksMethods = require("../src/");

route.get("/", async (req, res) => {
  const result = await booksMethods;
  res.send(books);
});

route.get("/:id", (req, res) => {
  res.send(books[0]);
});

module.exports = route;
