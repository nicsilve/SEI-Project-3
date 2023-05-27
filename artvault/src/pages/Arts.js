import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Arts() {

    const[arts, setArts] = useState([]);
    const[imgs, setImgs] = useState([]);

    const fetchArt = async () => {
        try {
            let arturl = 'https://api.artic.edu/api/v1/artworks'
            const response = await fetch(arturl);
            const artData = await response.json();
            // console.log(artData.data)
            setArts(artData.data)

        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchArt();
    }, [])


    return(
        <section className="container">
        {arts.map((art,idx) => {
            return (
                <div key={idx}>
                    <Link to={`details/${art.id}`}>
                    <h3>{art.title}, {art.date_display}</h3>
                    <p>{art.artist_title}</p>
                    <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`} alt={art.thumbnail.alt_text}/>
                    </Link>
                </div>
            )
        })}
        </section>
    );
}

export default Arts;