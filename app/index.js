const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const routes = require("../routes/leaderboard")
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8080;
const dbURI = process.env.MONGODB_URI
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