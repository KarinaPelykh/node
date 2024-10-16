const contacts = require("./src/contacts");
const { program } = require("commander");

program.option("-a,--action,<type>", "choose action");
program.option("-i,--id,<type>", "user id");
program.option("-n,--name,<type>", "user name");
program.option("-e,--email,<type>", "user email");
program.option("-p,--phone,<type>", "user phone");
program.parse();

const option = program.opts();

const invokeAction = async ({ id, name, email, phone, action }) => {
  switch (action) {
    case "red":
      const red = await contacts.listContacts();
      return console.log(red);
    case "get":
      const getContact = await contacts.getContactById(id);
      return console.log(getContact);
    case "remove":
      const contactRemove = await contacts.removeContact(id);
      return console.log(contactRemove);

    case "add":
      const addNewContact = await contacts.addContact({ name, email, phone });
      return console.log(addNewContact);
    default:
      console.log("Unknown action");
  }
};
invokeAction(option);
