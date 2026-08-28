
const http = require('http');
const fs = require('fs');
const { error, log } = require('console');
const url = require("url");


const PersonalServer = http.createServer((req , res) =>{
    const log = `${Date.now()} ${req.url}: new user log \n`;

    fs.appendFile('Log.txt', log, (err , data) => {

        switch("") {

            case "/":
                res.end ("home page")
            break;
            case "/about":
            const username = "smith spector"
            res.end ("admin");
            break
            
            case "/signup":
                if (req.method ==="GET" ) res.end("this is signup form");
                else if (req.method === "POST ") {
                    res.end ("sucessfully")
                }

            default:
                res.end ("page not found");


        }
        



    } )

});



PersonalServer.listen(3000, () => console.log('server start'));


