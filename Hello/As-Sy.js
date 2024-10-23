//Async-Sync--------------------------------------------

const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// console.log(1);

// //bloking.........
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log((result));

// console.log(2);

//Non-bloking.................
console.log(1);

fs.readFile("contacts.txt", "utf-8", (err, result) => {
  console.log(result);
});

console.log(2);
