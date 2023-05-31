
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
        <div className="add-art-gallery">
        
        <h1 className="add-title">Add to your gallery</h1>
        <form onSubmit={handleSubmit}>
            <ul className="flex-outer">
                <li>
                <label>Title:</label>
                <input
                    type='text'
                    required
                    placeholder="Art piece title"
                    id="title"
                    value={newForm.title}
                    onChange={handleChange}
                />
                </li>
            
            <li>
            <label>Artist's Name:</label>
                <input
                    type='text'
                    required
                    placeholder="Artist's name"
                    id="artist"
                    value={newForm.artist}
                    onChange={handleChange}
                />
            </li>
            <li>
            <label>Image URL: </label>
                <input
                    type='text'
                    required
                    placeholder="Image URL"
                    id="image"
                    value={newForm.image}
                    onChange={handleChange}
                />
           </li>
           <li>
           <label>Medium:</label>
                <input
                    type='text'
                    required
                    placeholder="Medium"
                    id="medium"
                    value={newForm.medium}
                    onChange={handleChange}
                />
           </li>
           <li>
           <label>Artist's Origin: </label>
                <input
                    type='text'
                    required
                    placeholder="E.g. Italy"
                    id="artist_origin"
                    value={newForm.artist_origin}
                    onChange={handleChange}
                />
           </li>
           <li>
           <label>Description:</label>
            <input
                    type='text'
                    required
                    placeholder="Description"
                    id="description"
                    value={newForm.description}
                    onChange={handleChange}
                />
           </li>
           <li>
           <label>Artwork Date:</label>
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
           </li>
            </ul>
            <div className="submit-button">
            <button>Add to your gallery</button>
            </div>
            
        </form>
        
        </div>
    )
}

export default AddArt;