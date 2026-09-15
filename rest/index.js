const express = require("express");
const User = require("./MOCK_DATA.json");
const fs = require('fs');


const app = express();
const PORT = 8000;

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
    .patch((req, res) => {
        return res.json({ status: "pendding" });

    })

    .delete((req, res) => {
        return res.json({ status: "pendding" });
    })



app.post("/new/users", (req, res) => {
    //creating new user 
    const body = req.body;
    if (!body ||! body.name || ! body.age || !body.faculty) {
        return res.status(400) .json ({msg: "fill the required items"})
    }
    User.push({ ...body, id: User.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(User), (err, data) => {
        return res.status(201).json({ status: "sucess", id: User.length });

    });


});

app.listen(PORT, () => console.log(`server is running`));
