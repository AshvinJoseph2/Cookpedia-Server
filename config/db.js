const mongoose = require('mongoose')
const connectionstring = process.env.DB_URL
mongoose.connect(connectionstring).then(res=>{
    console.log("Database Connection Successfulll!!!");
}).catch(error=>{
    console.log("Database Connection Failed....");
    console.log(error);   
})