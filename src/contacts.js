const fs = require("fs/promises");
const path = require("path");

// contacts.js

const contactsPath = path.join(_dirname, "contacts.js");
console.log(contactsPath);

async function listContacts() {
  // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};