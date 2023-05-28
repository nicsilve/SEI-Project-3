require('dotenv').config();

const { PORT, MONGODB_URI } = process.env;




// import express
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

// create application object
const app = express();

// connect to mongoose via connection.js
const mongoose = require('./models/connection');

app.use(express.json());

// define art controller to server and connect it
const artController = require('./controllers/art-controller.js')
app.use('/', artController)

app.use(cors());
app.use(morgan('dev'));





app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));