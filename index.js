const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const routes = require("./routes/leaderboard")

const app = express();
const PORT = 8080;
const dbURI = "mongodb+srv://johndoe:johndoe@leaderboard.n8sst.mongodb.net/Wolfame?retryWrites=true&w=majority"
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
        .then((res) => {
            console.log('Connection Established');
        })
        .catch((err) => console.log(err))

app.use(cors())
app.get('/', (req, res) => res.send('Hello from homepage.'))
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))

app.use(bodyParser.json())
app.use('/leaderboard',routes)