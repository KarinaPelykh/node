const express = require("express");
// const route = require("./route/contact");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/contacts", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// app.get("/contacts/:id", (req, res) => {
//   res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });

// app.use("route/contact", route);

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
