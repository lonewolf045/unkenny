const { LeaderBoard } = require("../models/leaderboard")

const getLeaderBoard = ((req,res) => {
    console.log(LeaderBoard)
    LeaderBoard.find()
                .then(result => {
                    console.log(result)
                    res.status(200).send(result)
                    
                })
                .catch(err => {
                    res.status(400).send(`There is an error in the server while loading projects`);
                })
})

module.exports = {getLeaderBoard}