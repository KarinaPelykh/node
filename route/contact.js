const express = require("express");

const router = express.Router();

const contactsMethods = require("../src/contacts");
const { HttpError } = require("../helpers");

router.get("/", async (req, res) => {
  try {
    const result = await contactsMethods.listContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await contactsMethods.getContactById(req.params.id);
    res.json(result);
    if (!result) {
      throw HttpError(400, "not found");
    }
  } catch (error) {
    const { status = 500, message = "server error" } = error;
    res.status(status).json({ message });
  }
});

router.post("/", async (req, res) => {
  const result = await contactsMethods.addContact(req.body);
  res.status(201).json(result);
});

router.delete("/:id", async (req, res) => {
  await contactsMethods.removeContact(req.params.id);
  res.json({ message: "Contact was delete" });
});

module.exports = router;
