const operation = require("./contacts")
const argv = require('yargs').argv;



// TODO: рефакторити
async function invokeAction  ({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
    const contacts = await operation.listContacts();
     return console.table(contacts);
      break;

    case 'get':
    const contact = await operation.getContactById(id);
    console.table(contact);  
      break;

    case 'add':
    const newContact = await operation.addContact(name, email, phone);
    console.table(newContact);
      break;

    case 'remove':
    const removeContact = await operation.removeContact(id);
    console.table(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
 invokeAction(argv);




