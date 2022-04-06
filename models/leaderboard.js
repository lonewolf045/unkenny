const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LeaderBoardSchema = new Schema({
    "Hall/Hostel": {type:String},
    "Score": {type:String,}
},{
    timestamps:true,
})

const LeaderBoard = mongoose.model('LeaderBoard',LeaderBoardSchema)

module.exports = {LeaderBoard}