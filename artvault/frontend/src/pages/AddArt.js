
import { useState } from "react";
import { useNavigate } from "react-router";

function AddArt() {

    const arturl = 'http://localhost:4000/'

    const navigate = useNavigate();

    // creating newForm array of objects
    const [newForm, setNewForm] = useState({
        artist: '',
        title: '',
        medium: '',
        image: '',
        artist_origin:  '', 
        description: '',
        date_of_creation: ''
    })

    // need to set up how to handle a change in form and send values to setForm before submission
    function handleChange(e) {
        console.log(e.target.value)
        setNewForm((previousFormState) => ({
            ...previousFormState,
            [e.target.id]: e.target.value
        }))
    }

    // // create function to contact API and send current state to our backend and send content from local state as JSON. data we send from frontend should be accessibile in the create route's request body req.body
    // async function createArt(artData) {
    //     try {
    //         // make post request to create art
    //         const newArt = await fetch(arturl, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(artData),
    //             });
    //             console.log(await newArt.json())
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    // defining function to handle form submission
async function handleSubmit(e) {
    try {
        e.preventDefault();
        await fetch(arturl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            // have to specify what you're sending is going to be a string
            body: JSON.stringify(newForm)
        })
        return navigate(`/`);
        // console.log(myNewArt)
    } catch(err) {
        console.log(err)
    }

}



    return(
        <>
        <h1>Add an Art Piece</h1>
        <form onSubmit={handleSubmit}>
        <label>
                <span>Title:</span>
                <input
                    type='text'
                    required
                    placeholder="Art piece title"
                    id="title"
                    value={newForm.title}
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Artist's Name:</span>
                <input
                    type='text'
                    required
                    placeholder="Artist's name"
                    id="artist"
                    value={newForm.artist}
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Image URL:</span>
                <input
                    type='text'
                    required
                    placeholder="Image URL"
                    id="image"
                    value={newForm.image}
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Medium:</span>
                <input
                    type='text'
                    required
                    placeholder="Medium"
                    id="medium"
                    value={newForm.medium}
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Artist's Origin</span>
                <input
                    type='text'
                    required
                    placeholder="E.g. Italy"
                    id="artist_origin"
                    value={newForm.artist_origin}
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Description:</span>
                <input
                    type='text'
                    required
                    placeholder="Description"
                    id="description"
                    value={newForm.description}
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Artwork's Origin Date:</span>
                <input
                    type='number'
                    required
                    placeholder="Year"
                    min='1'
                    max='2099'
                    id="date_of_creation"
                    value={newForm.date_of_creation}
                    onChange={handleChange}
                />
            </label>

            <button>Submit Form</button>
        </form>
        </>
    )
}

export default AddArt;