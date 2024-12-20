const express = require("express");
const morgan = require("morgan");
const routeContacts = require("./route/contact");


const app = express();

const port = 3000;

const logger = app.get("env") === "development" ? "dev" : "short";

app.use(express.json());

app.use("/contact", routeContacts);


app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Not found" } = err;
  res.status(status).json(message);
});

app.use(morgan(logger));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
