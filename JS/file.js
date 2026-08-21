const fs = require('fs');


// this is the sysnchronous method to write the file in the system

// fs.writeFileSync('./memo.txt', 'this is my memo file with username and password');

// fs.writeFileSync('./memo.txt', 'this is the asynchronous method to write file.', (err) =>{})

// const contact = fs.readFile('./contactlist.txt', 'utf-8', (err, contact) =>{


// if(err) {
//     console.log('this file is not found in the system')
// } 
// else {
//     console.log(contact);

// }

// });

// fs.writeFileSync('./memo.txt', 'adding the new data into the system')

// fs.writeFile('./memo.txt', 'iam the new users.', (err, memo) =>{
//     if(err){
//         console.log('unable to write')
//     }

//     else{
//         console.log('sucessfully added the data into the system')
//     }
// })

// blocking operation 

// console.log('first executed')

// const second = fs.readFileSync('./memo.txt', 'utf-8');

// console.log(second);

// console.log('third');

//non-blocking operations

// console.log("iam first");

// fs.readFile('./memo.txt', 'utf-8', (err, memo) =>{
//     if(err) {
//         console.log("not found");

//     }

//     else{
//         console.log(memo)
//     }
// });


// console.log('iam the last one');
// console.log('iam the second-last one');
// console.log('iam the third-last one');
// console.log('iam the fourth-last one');



