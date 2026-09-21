const { default: mongoose } = require("mongoose");


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

module.exports = Users;
