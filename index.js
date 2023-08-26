const fs = require('fs').promises;
console.log("hfhfjfjhjhfh")
const contactsPath = "./db/contacts.json"
fs.readFile(contactsPath,"utf-8")
.then(data => console.log(data)) 
.catch(error => console.log(error))