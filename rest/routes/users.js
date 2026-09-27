const express = require("express");
const Users = require("../models/users");

const router = express.Router();


// REST API 

router.get("/", async(req, res) => {
	const allDbUsers = await Users.find({});
    return res.json({allDbUsers});
});

router
    .route("/:id")
    .get(async(req, res) => {
        const user = await Users.findById(req.params.id);
        if (!user) return res.status(404).json ({error: "users not found"});
        return res.json(user);
    })
    .patch(async (req, res) => {
        await users.findby.id
        return res.json({ status: "pendding" });

    })

    .delete((req, res) => {
        return res.json({ status: "pendding" });
    })



router.post("/",async (req, res) => {
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

module.exports = Users; 

