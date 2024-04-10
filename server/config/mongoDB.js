const mongoose = require('mongoose');
require('dotenv').config();

const db = async() =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL).then(
            console.log("Database connected!!")
        ) 
    } catch (error) {
        console.log("Error connecting database!!");
    }
}

module.exports = db;