require('dotenv').config();

const { PORT, MONGODB_URI } = process.env;
const {Art} = require('./models')

const seededData = [
    {
    artist: "Yayoi Kusama",
    title: "Fireflies on the Water",
    medium: "Mirros, plexiglass, lights and water",
    image: "https://whitneymedia.org/assets/artwork/19436/2003_322_cropped.jpeg",
    artist_origin:  "Japan", 
    description: "Fireflies on the Water is a room-sized installation that is meant to be viewed in solitude, one person at a time. It consists of a small, darkened room lined with mirrors on all sides; a pool of water in the center of the space into which a dock-like viewing platform protrudes; and 150 small lights hanging from the ceiling. In tandem, these components create a dazzling effect of direct and reflected light, emanating from both the mirrors and the water’s surface. Space appears infinite, with no top or bottom, beginning or end. Like Yayoi Kusama’s earliest room-sized installations—including Infinity Mirror Room (1965), in which she combined mirrors and her signature polka-dotted phallic protrusions in an enclosed chamber—Fireflies embodies an almost hallucinatory approach to reality. While related to the artist’s personal mythology and therapeutic working process, it also refers to sources as varied as the myth of Narcissus and Kusama’s native Japanese landscape. ",
    date_of_creation: 2002
    },
    {
    artist: "Gerhard Richter",
    title: "Cage 1",
    medium: "Oil on canvas",
    image: "https://cdn.gerhard-richter.com/images/xxlarge/17773.jpg",
    artist_origin:  "Germany", 
    description: "age (1) – (6) 2006 is a group of six large, square abstract paintings by the German artist Gerhard Richter. Three of the canvases measure 2900 x 2900 mm, while the other three are slightly larger, at 3000 x 3000 mm each. The paintings all have a similar thickly painted surface that is rough and textured in appearance. They are composed of a progression of horizontal and vertical bands and a series of multi-directional scratches and indentations that are scraped into the painted surface. In specific areas of the paintings, the upper layers of paint have been removed and several sublayers of colour exposed. In each painting, the layers of colours and the composition of the bands and marks are different. Cage (1) is predominantly lime green in hue with a wide bottle green bar running horizontally across the upper quarter of the composition, and at the far right of the work is a wide vertical band composed mostly of white, but also containing yellow and green. Cage (2) is largely pale grey, white and lime green, with small exposed areas of bright red and charcoal grey. Cage (3) is composed of multiple scratch marks and indentations and is mostly light grey and white, with small patches of lime green, bottle green, dark grey, blue and red. Cage (4) has multiple sublayers of paint exposed, while Cage (5) is predominantly grey with white, red, pale yellow and a small amount of black. Cage (6) is the most varied in its range of exposed underlying colours, but it overall composition is mainly green, white, yellow, black and blue. The paintings are designed to be hung together in one large gallery space.",
    date_of_creation: 2006
    }
]


// import express
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const seedData = async () => {
    try {
        await Art.deleteMany({});
        await Art.insertMany(seededData);
        console.log('data seeded!')
    } catch(err) {
        console.log('error', err)
    }
    
}

seedData();

// create application object
const app = express();

// connect to mongoose via connection.js
const mongoose = require('./models/connection');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// define art controller to server and connect it
const artController = require('./controllers/art-controller.js')
app.use('/', artController)







app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));