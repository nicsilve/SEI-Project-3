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
        <section className="container">
            {arts.map((art,idx) => {
                return(
                    <div key={idx}>
                        <h1>{art.title}</h1>
                        <h2>{art.artist}</h2>
                        <a href={`http://localhost:3000/details/${art._id}`}>{art._id}</a>
                    </div>
                )
            })}
        </section>

    )
}

export default Arts;