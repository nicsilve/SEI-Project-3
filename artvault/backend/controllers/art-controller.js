const express = require('express')
const router = express.Router()
const {Art} = require('../models')


// seeded data



// Index route
router.get("/", async (req, res) => {
    try {
        res.json(await Art.find({}));
    } catch(err) {
        res.status(400).json(error)
    }
});

// Adding seeded data
// router.get('/seed', async(req, res, next) => {
//     try {
//         await Art.deleteMany({});
//         await Art.insertMany(seededData);
//         res.redirect('/')
//     } catch(err) {
//         console.log(err);
//         next();
//     }
// })

// Create route
router.post("/", async (req, res) =>  {
    try{
        res.json(await Art.create(req.body));
    } catch(err) {
        res.status(400).json(err);
    }
});

// Show route
router.get('/details/:id', async(req,res) => {
    try {
        res.json(await Art.findById(req.params.id))
    } catch(err) {
        res.status(400).json(err)
    }
});


// Delete route
router.delete('/details/:id', async(req,res) => {
    try {
        res.json(await Art.findByIdAndRemove(req.params.id));
    } catch {
        res.status(400).json(error)
    }
})

module.exports = router