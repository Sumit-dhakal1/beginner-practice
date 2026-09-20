const express = require("express");
const User = require("./MOCK_DATA.json");
const fs = require('fs');
const { type } = require("os");
const { default: mongoose } = require("mongoose");


const app = express();
const PORT = 8000;

//connection with mongooes 
mongoose.connect('mongodb://127.0.0.1:27017/rest-api') 
.then (() => console.log('mongo DB connected'))
.catch ((err) => console.log ('mongo error', err));

// creating schema 

const userSchema = new mongoose.Schema({ 
     first_name : {
        type : String,
        require : true,
     
     },
      last_name : {
        type : String,
        require : true ,
      },

      email : {
        type : String, 
        require : true,
        unique : true 
      },

      gender : {
        type : String,
        require : true 
      },

    
});

const Users = mongoose.model("users", userSchema);
  

// middleware or certain plugins to parse the request body

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("iam middleware")
    next();
});

//route
app.get("/users", (req, res) => {
    const userName = `
    
    <ul>
    ${User.map((user) => `<li>${user.first_name} ${user.ip_address} </li>`).join("")}
}
    </ul>

    `;
    res.send(userName);
});

// REST API 

app.get("/users/api", (req, res) => {
    res.setHeader("x-name", "its me sumit dhakal")
    return res.json(User);
});

app
    .route("/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = User.find((user) => user.id === id);
        return res.json(user);
    })
    .patch(async (req, res) => {
        await users.findby.id
        return res.json({ status: "pendding" });

    })

    .delete((req, res) => {
        return res.json({ status: "pendding" });
    })



app.post("/new/users",async (req, res) => {
   const body = req.body;
   if (
    !body ||
    !body.first_name||
    !body.last_name ||
    !body.email ||
    !body.gender 
   )
   {
        return res.status(400) .json ({msg: "fill the required items"});

   }    
    
const result = await Users.create ({
    first_name : body.first_name,
    last_name : body.last_name,
    email : body.email,
    gender : body.gender,
 
});

console.log("result", result)
return res.status(201).json ({msg: "sucessfully created"})
  


});

app.listen(PORT, () => console.log(`server is running`));
