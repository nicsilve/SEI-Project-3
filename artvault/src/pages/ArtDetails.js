import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function ArtDetails() {
    const { id } = useParams();
    const url = `https://api.artic.edu/api/v1/artworks/${id}`
    const[art, setArt] = useState([])

    // console.log({id})

    async function fetchArtPiece() {
        try {
            let artPiece = await fetch(url);
            artPiece = await artPiece.json();
            setArt(artPiece.data)
            console.log(artPiece.data)
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
            <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`} alt={art.thumbnail?.alt_text} />
            <h3>{art.title}, {art.date_display}</h3>
            <p>{art.artist_title}</p>
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