import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ArtDetails() {
    const { id } = useParams();
    const url = `http://localhost:4000/details/${id}`
    const[art, setArt] = useState([])

    const navigate = useNavigate()

    async function removeArt() {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(url, options)
            const deletedArt = await response.json()
            navigate('/')
        } catch(err) {
            console.log(err)
            navigate(url)
        }
    }

    // console.log({id})

    async function fetchArtPiece() {
        try {
            let artPiece = await fetch(url);
            artPiece = await artPiece.json();
            setArt(artPiece)
            console.log(artPiece)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchArtPiece();
    }, [])

    function loaded() {
        return(
            <>
            <p>{art.artist}</p>
            <p>{art.title}</p>
            {art.image && <img src={`${art.image}`} />}
            <p>{art.description}</p>
            <button onClick={removeArt}>Delete from Art Vault</button>
            </>
        )
    }

    function loading() {
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <>
        {art ? loaded() : loading()}
        </>
    )
}

export default ArtDetails;