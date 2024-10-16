const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "db/contact.json");

async function listContacts() {
  const redListContacts = await fs.readFile(contactsPath);
  return JSON.parse(redListContacts);
}

async function getContactById(id) {
  const contactList = await listContacts();
  const findContact = contactList.find((contact) => contact.id === id);
  return findContact;
}

async function addContact(data) {
  const contactList = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };

  contactList.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactList, null, 2));
  return newContact;
}

async function removeContact(id) {
  const contactList = await listContacts();
  const index = contactList.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return null;
  }
  const [result] = contactList.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactList, null, 2));
  return result;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
