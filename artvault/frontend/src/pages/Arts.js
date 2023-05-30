import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddArt from "./AddArt";

function Arts() {

    const[arts, setArts] = useState([]);

    const fetchArt = async () => {
        try {
            let arturl = 'http://localhost:4000/'
            const response = await fetch(arturl);
            const artData = await response.json();
            // console.log(artData.data)
            setArts(artData)

        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchArt();
    }, [])

    return(
        <>
        <p className="index-copy">Curate your own art gallery with Art Vault</p>
        <section className="container">
            {arts.map((art,idx) => {
                return(
                    <div key={idx}>
                        <Link to={`http://localhost:3000/details/${art._id}`}>
                        <div className="card">
                            <div className="card-image">
                            <img src={`${art.image}`} alt={art.title} />
                            </div>
                        <div className="card-title">
                        <h2>{`${art.title}, ${art.date_of_creation}`}</h2>
                        <div className="card-artist">
                        <h3>{art.artist}</h3>
                        </div>
                        </div>
                        </div>
                        </Link>
                        {/* <a href={`http://localhost:3000/details/${art._id}`}>{art._id}</a> */}
                        
                    </div>
                )
            })}
        </section>
        </>

    )
}

export default Arts;