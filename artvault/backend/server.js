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
    description: "Cage (1) – (6) 2006 is a group of six large, square abstract paintings by the German artist Gerhard Richter. Three of the canvases measure 2900 x 2900 mm, while the other three are slightly larger, at 3000 x 3000 mm each. The paintings all have a similar thickly painted surface that is rough and textured in appearance. They are composed of a progression of horizontal and vertical bands and a series of multi-directional scratches and indentations that are scraped into the painted surface. In specific areas of the paintings, the upper layers of paint have been removed and several sublayers of colour exposed. In each painting, the layers of colours and the composition of the bands and marks are different. Cage (1) is predominantly lime green in hue with a wide bottle green bar running horizontally across the upper quarter of the composition, and at the far right of the work is a wide vertical band composed mostly of white, but also containing yellow and green. Cage (2) is largely pale grey, white and lime green, with small exposed areas of bright red and charcoal grey. Cage (3) is composed of multiple scratch marks and indentations and is mostly light grey and white, with small patches of lime green, bottle green, dark grey, blue and red. Cage (4) has multiple sublayers of paint exposed, while Cage (5) is predominantly grey with white, red, pale yellow and a small amount of black. Cage (6) is the most varied in its range of exposed underlying colours, but it overall composition is mainly green, white, yellow, black and blue. The paintings are designed to be hung together in one large gallery space.",
    date_of_creation: 2006
    },
    {
    artist: "Felix Gonzalez-Torres",
    title: `"Untitled" (Portrait of Ross in L.A.)`,
    medium: "Candies in variously colored wrappers, endless supply",
    image: "https://www.artic.edu/iiif/2/3679b064-5be6-20d4-e182-de13d4a9dd3e/full/843,/0/default.jpg",
    artist_origin:  "American, born Cuba", 
    description: "Felix Gonzalez-Torres produced meaningful and restrained sculptural forms out of common materials. “Untitled” (Portrait of Ross in L.A.) consists of an ideal weight of 175 pounds of shiny, commercially distributed candy. The work’s physical form and scale change with each display, affected by its placement in the gallery as well as audience interactions. Regardless of its physical shape, the label lists its ideal weight, likely corresponding to the average body weight of an adult male, or perhaps the ideal weight of the subject referred to in the title, Ross Laycock, the artist’s partner who died of complications from AIDS in 1991, as did Gonzalez-Torres in 1996. As visitors take candy, the configuration changes, linking the participatory action with loss—even though the work holds the potential for endless replenishment.",
    date_of_creation: 1991
    },
    {
    artist: "Joan Mitchell",
    title: "City Landscape",
    medium: "Oil on linen",
    image: "https://www.artic.edu/iiif/2/f7f9615d-2c2b-6b23-47b2-cd6cdc846504/full/843,/0/default.jpg",
    artist_origin:  "American", 
    description: `Although influenced by Abstract Expressionist artists in New York in the early 1950s, Joan Mitchell did not prioritize self-expression: her often exuberant abstractions were “about landscape, not about me,” she once explained. Mitchell painted large, light-filled canvases animated by loosely applied skeins of bright color—here infused with the energy of a large metropolis.

    The title suggests a relationship between the painting’s network of pigments and the nerves or arteries of an urban space. The sense of spontaneity conveyed in City Landscape, however, belies Mitchell’s methods. Unlike many of her contemporaries, who were dubbed “action painters,” Mitchell worked slowly and deliberately. “I paint a little,” she said. “Then I sit and look at the painting, sometimes for hours. Eventually, the painting tells me what to do.”`,
    date_of_creation: 1955
    },
    {
    artist: "Archibald John Motley Jr.",
    title: "Nightlife",
    medium: "Oil on canvas",
    image: "https://www.artic.edu/iiif/2/ec19d5f1-ae0f-5186-d421-4a53dca5fb90/full/843,/0/default.jpg",
    artist_origin:  "American", 
    description: `A palpable energy and sense of movement enliven Nightlife, Archibald Motley’s portrayal of a crowded cabaret in the South Side neighborhood of Bronzeville in Chicago. With stylized figures, an array of diagonal lines, and heightened colors keyed to shades of magenta and violet, the artist captured the exuberance of city dwellers out on the town. Motley created a network of gestures and glances among the people, drawing attention to the various social interactions that animate the scene.

    The composition is an exploration of artificial lighting. Motley was inspired, in part, to paint Nightlife after having seen Edward Hopper’s Nighthawks (1942.51), which had entered the Art Institute’s collection the prior year.
    
    Artist
    `,
    date_of_creation: 1943
    },
    {
    artist: "Georgia O'Keeffe",
    title: "Blue and Green Music",
    medium: "Oil on canvas",
    image: "https://www.artic.edu/iiif/2/3ee54063-9d78-ee86-0103-b477d988a93f/full/843,/0/default.jpg",
    artist_origin:  "American", 
    description: `Around 1920 Georgia O’Keeffe painted a number of oils exploring, as she later recalled, “the idea that music could be translated into something for the eye.” In Blue and Green Music, O’Keeffe’s colors and forms simultaneously suggest the natural world and evoke the experience of sound. She was drawn to the theories of the Russian Expressionist painter Vasily Kandinsky, who, in his 1912 text Concerning the Spiritual in Art, argued that visual artists should emulate music in order to achieve pure expression free of literary references.`,
    date_of_creation: 1919
    },
    {
    artist: "Pablo Picasso",
    title: "Daniel-Henry Kahnweiler",
    medium: "Oil on canvas",
    image: "https://www.artic.edu/iiif/2/aebda29e-16b8-4393-6edc-805cdb6ba459/full/843,/0/default.jpg",
    artist_origin:  "Spain", 
    description: `The subject of this portrait is Daniel-Henry Kahnweiler (1884–1979), a German-born art dealer, writer, and publisher. Kahnweiler opened an art gallery in Paris in 1907 and in 1908 began representing Pablo Picasso, whom he introduced to Georges Braque. Kahnweiler was a great champion of the artists’ revolutionary experiment with Cubism and purchased the majority of their paintings between 1908 and 1915. He also wrote an important book, The Rise of Cubism, in 1920, which offered a theoretical framework for the movement.

    Kahnweiler sat as many as thirty times for this portrait. No longer seeking to create the illusion of true appearances, Picasso broke down and recombined the forms he saw. He described Kahnweiler with a network of shimmering, semitransparent surfaces that merge with the atmosphere around him. Forms are fractured into various planes and faceted shapes and presented from several points of view. Despite the portrait’s highly abstract character, however, Picasso added attributes to direct the eye and focus the mind: a wave of hair, the knot of a tie, a watch chain. Out of the ﬂickering passages of brown, gray, black, and white emerges a rather traditional portrait pose of a seated man, his hands clasped in his lap.`,
    date_of_creation: 1910
    },
    {
    artist: "Claude Monet",
    title: "Water Lilies",
    medium: "Oil on canvas",
    image: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/1686,/0/default.jpg",
    artist_origin:  "France", 
    description: `“One instant, one aspect of nature contains it all,” said Claude Monet, referring to his late masterpieces, the water landscapes that he produced at his home in Giverny between 1897 and his death in 1926. These works replaced the varied contemporary subjects he had painted from the 1870s through the 1890s with a single, timeless motif—water lilies. The focal point of these paintings was the artist’s beloved ﬂower garden, which featured a water garden and a smaller pond spanned by a Japanese footbridge. In his first water-lily series (1897–99), Monet painted the pond environment, with its plants, bridge, and trees neatly divided by a fixed horizon. Over time, the artist became less and less concerned with conventional pictorial space. By the time he painted Water Lilies, which comes from his third group of these works, he had dispensed with the horizon line altogether. In this spatially ambiguous canvas, the artist looked down, focusing solely on the surface of the pond, with its cluster of vegetation ﬂoating amid the reﬂection of sky and trees. Monet thus created the image of a horizontal surface on a vertical one.`,
    date_of_creation: 1906
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