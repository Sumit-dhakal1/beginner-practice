
// const http = require('http');
// const fs = require('fs');
// const { error, log } = require('console');
// const url = require("url");
// const express = require("express");



// const PersonalServer = http.createServer((req , res) =>{
//     const log = `${Date.now()} ${req.url}: new user log \n`;

//     fs.appendFile('Log.txt', log, (err , data) => {

//         switch("") {

//             case "/":
//                 res.end ("home page")
//             break;
//             case "/about":
//             const username = "smith spector"
//             res.end ("admin");
//             break
            
//             case "/signup":
//                 if (req.method ==="GET" ) res.end("this is signup form");
//                 else if (req.method === "POST ") {
//                     res.end ("sucessfully")
//                 }

//             default:
//                 res.end ("page not found");


//         }
        



//     } )

// });



// PersonalServer.listen(8000, () => console.log('server start'));


const express = require("express");

const app = express();

app.get("/", (req , res ) => {
    return res.end ("hello it is smith spector")
});

app.get("/login", (req , res) => {
    return res.end ("wellcome login page")
});

app.get("/product", (req, res) =>{
    return res.end ("product is out of stock")
});




app.listen(8000, () => console.log("server is running!"));
