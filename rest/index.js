const express = require("express");
const User = require("./MOCK_DATA.json");
const fs = require('fs');


const app = express();
const PORT = 8000;

// middleware or certain plugins to parse the request body

app.use(express.urlencoded ({extended : true}));


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

app.get("/users/:id", (req, res) => {
    const id =  Number (req.params.id);
    const user = User.find((user) => user.id === id)
    return res.json(user);
    
})


app.post("/new/users", (req, res) => {
    //creating new user 
    const body = req.body;
    User.push({...body, id : User.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(User), (err, data)  => {
        return res.json({status: "pending"});

    });
});



app.listen(PORT, () => console.log(`server is running`));
