import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
            <Link to={`https://www.artic.edu/artists/${art.artist_id}`}>
            <p>{art.artist_title}, {art.place_of_origin}</p>
            </Link>
            <p>Medium: {art.medium_display}</p>
            <p>Dimensions: {art.dimensions}</p>
            {art.provenance_text && <p>Provenance Text: {art.provenance_text}</p>}
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