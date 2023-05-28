const express = require('express')
const router = express.Router()
const {Art} = require('../models')


// Index route
router.get("/", async (req, res) => {
	res.status(200).json({message: "art index route"})
});

// Create route
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "art create route"})
});

module.exports = router