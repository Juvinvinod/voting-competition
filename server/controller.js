const Contestant = require("./model/contestant");

const addContestant = (req,res) =>{
    const name = req.body.name;
    const age = req.body.name;
    const image = req.body.url;

    
}


const getContestants = async(req,res) =>{
    const details = await Contestant.find();
    return res.status(200).json({
        status:"success",
        data: details
    })
}

module.exports = {
    addContestant,
    getContestants
}