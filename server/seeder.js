const mongoose = require("mongoose");
require('dotenv').config();
const ContestantModel = require("./model/contestant");

async function seedContestants(){
    try {
        await mongoose.connect(process.env.DATABASE_URL)
            console.log("Database connected!!")
        const data1 = {
            name:"asdf",
            age:23,
            image_url:"asdf"
        }
        const data2 = {
            name:"asdf",
            age:23,
            image_url:"asdf"
        }
        const data3 = {
            name:"asdf",
            age:23,
            image_url:"asdf"
        }
        await ContestantModel.insertMany([data1,data2,data3])
        console.log("data seeded!!");
        await mongoose.disconnect();
    } catch (error) {
        console.log("Error seeding!!");
    }
}

seedContestants().then(()=>{
    console.log("seeding completed");
    process.exit(0);
}).catch((err)=>{
    console.log("Error seeding!!");
})