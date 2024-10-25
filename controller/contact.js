const contactsMethods = require("../src/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getContact = async (req, res) => {
  const result = await contactsMethods.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const result = await contactsMethods.getContactById(req.params.id);
  res.json(result);
  if (!result) {
    throw HttpError(400, "not found");
  }
};

const addContact = async (req, res) => {
  console.log(req.body);

  const result = await contactsMethods.addContact(req.body);
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  await contactsMethods.removeContact(req.params.id);
  res.json({ message: "Contact was delete" });
};

module.exports = {
  getContact: ctrlWrapper(getContact),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  deleteContact: ctrlWrapper(deleteContact),
};
