import { useParams } from "react-router";
import { useState, useEffect } from 'react';

function ArtDetails() {
    const {id} = useParams();
    const url = `https://api.artic.edu/api/v1/artworks/${id}`
    const[art, setArt] = useState([])

    // console.log({id})

    async function fetchArtPiece() {
        try {
            let artPiece = await fetch(url);
            artPiece = await artPiece.json();
            setArt(artPiece.data)
            // console.log(artPiece.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchArtPiece();
    }, [])

    return(
        <>
        <h2>{art.title}</h2>
        </>
    )
}

export default ArtDetails;