const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Це головний роутер");
});

router.get("/contact", (req, res) => {
  res.send("Contact");
});

// router.get("/contact/:id", (req, res) => {
//   res.send(`contact${res.params.id}`);
// });

// router.get("/r", (req, res) => {
//   res.send("Hello World!");
// });

// router.get("/contacts", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// router.get("/contacts/:id", (req, res) => {
//   res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });
module.exports = router;
