const app  = require("./app");
const db = require("./config/mongoDB");
require('dotenv').config();

const port = process.env.PORT || 3001;
db(); 
app.listen(port,()=>{
    console.log("Server is running!!");
})