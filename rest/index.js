const express = require("express");
const User = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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

app.get("/users/:id", (req, res) =>{
    const id =  Number (req.params.id);
    const user = User.find((user) => user.id === id)
    return res.json(user);
    
})


app.post("/users", (req, res) =>{
    //creating new user 
    return res.json({status : "pendding"})
});



app.listen(PORT, () => console.log(`server is running`));
