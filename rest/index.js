const express = require("express")
const User = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000; 

//route
app.get ("/users", (req, res) =>{
    const userName = `
    
    <ul>
    ${User.map((user) => `<li>${user.first_name}</li>`).join("")

}
    </ul>

    `;
    res.send(userName);
});



app.listen(PORT, ()=> console.log(`server is running`));




