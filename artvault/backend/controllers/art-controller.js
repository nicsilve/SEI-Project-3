const express = require('express')
const router = express.Router()
const {Art} = require('../models')


// Index route
router.get("/", async (req, res) => {
    try {
        res.json(await Art.find({}));
    } catch(err) {
        res.status(400).json(error)
    }
});

// Create route
router.post("/:id", async (req, res) =>  {
    try{
        res.json(await Art.create(req.body));
    } catch(err) {
        res.status(400).json(err);
    }
});

// Show route
router.get('/:id', async(req,res) => {
    try {
        res.json(await Art.findById(req.params.id))
    } catch(err) {
        res.status(400).json(err)
    }
});

module.exports = router