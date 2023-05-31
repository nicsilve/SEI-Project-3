import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

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
            await fetch(url, options)
            navigate('/')
        } catch(err) {
            console.log(err)
            navigate(url)
        }
    }

    // console.log({id})

    const fetchArtPiece = async () => {
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
    }, [fetchArtPiece])

    function loaded() {
        return(
            <>
            <div className="details">
            <div className="details-img">
            {art.image && <img src={`${art.image}`} alt={`${art.title}`}/>}
            </div>
            <h2>{art.title}, {art.date_of_creation}</h2>
            <h4>{art.artist}, {art.artist_origin}</h4>
            <p>Medium: {art.medium}</p>
            <p>{art.description}</p>
            <button onClick={removeArt}>Delete from Art Vault</button>
            </div>
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