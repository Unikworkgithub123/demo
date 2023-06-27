require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const { log } = require('console');

const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', async (req, res) => {
    console.log("OKKKKKKK == Palty");
    res.status(200).json({
        success: true,
        name:"dinesh chauhan",
        message: "First deploy Successfull....."
    })
});

module.exports = app
