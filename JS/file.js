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

fs.writeFile('./memo.txt', 'iam the new users.', (err, memo) =>{
    if(err){
        console.log('unable to write')
    }

    else{
        console.log('sucessfully added the data into the system')
    }
})