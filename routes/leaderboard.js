const express =  require("express");
const leaderBoardController = require("../controllers/leaderboard")

const router = express.Router()

router.get("/",leaderBoardController.getLeaderBoard)

module.exports = router