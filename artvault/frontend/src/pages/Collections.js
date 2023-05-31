import { Link } from "react-router-dom";

function Collections() {
    return(
        <>
        <h1 className="collections-title">Explore art collections for your gallery:</h1>
        <ul className="collections-list">
            <li>
                <Link to='https://whitney.org/collection/works' target='blank'>
                <h4>Whitney Museum of Art</h4>
                </Link>
            </li>
            <li>
                <Link to='https://www.artic.edu/collection' target='blank'>
                <h4>Art Institue Chicago</h4>
                </Link>
            </li>
            <li>
                <Link to='https://www.moma.org/collection/' target='blank'>
                <h4>Museum of Modern Art</h4>
                </Link>
            </li>
            <li>
                <Link to='https://www.tate.org.uk/search?type=artwork' target='blank'>
                <h4>Tate Modern</h4>
                </Link>
            </li>
        </ul>
        </>
    )
}

export default Collections;