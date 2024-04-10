const mongoose = require('mongoose');
const {Schema } = require("mongoose");

const contestantSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    image_url:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Contestant",contestantSchema);