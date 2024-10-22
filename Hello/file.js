//file handling

const fs = require("fs");

// // Sync....
// fs.writeFileSync('./test.txt', 'hey there')

// // Async....
// fs.writeFile('./test.txt', 'hey there lll' , (err) => {});


// // Sync......
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);


// // Async.....
// fs.readFile("./contacts.txt", "utf-8", (err,result)=>{
//     if (err) {
//         console.log("Error",err);
        
//     }else {
//         console.log(result);
//     }
// })

fs.appendFileSync("./contacts.txt", `Hey There\n`);             
