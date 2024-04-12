const mongoose = require("mongoose");
require('dotenv').config();
const ContestantModel = require("./model/contestant");

async function seedContestants(){
    try {
        await mongoose.connect(process.env.DATABASE_URL)
            console.log("Database connected!!")
        const data1 = {
            name:"contestant 1",
            age:23,
            image_url:"https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        const data2 = {
            name:"contestant 2",
            age:23,
            image_url:"https://images.pexels.com/photos/3769148/pexels-photo-3769148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        const data3 = {
            name:"contestant 3",
            age:23,
            image_url:"https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        const data4 = {
            name:"contestant 4",
            age:23,
            image_url:"https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        await ContestantModel.insertMany([data1,data2,data3,data4])
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