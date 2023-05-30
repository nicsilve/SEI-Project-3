import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ArtDetails() {
    const { id } = useParams();
    const url = `http://localhost:4000/details/${id}`
    const[art, setArt] = useState([])

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