require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', async (req, res) => {
    console.log("Ok , First deploy Successfull.....");
    res.status(200).json({
        success: true,
        message: "First deploy Successfull....."
    })
});

module.exports = app
