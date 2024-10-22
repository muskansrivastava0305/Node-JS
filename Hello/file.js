//file handling

const fs = require("fs");

// // Sync....
// fs.writeFileSync('./test.txt', 'hey there')

// // Async....
fs.writeFile('./test.txt', 'hey there lll' , (err) => {});

const result = fs.readFileSync("./contacts.txt", "utf-8")
console.log(result);
