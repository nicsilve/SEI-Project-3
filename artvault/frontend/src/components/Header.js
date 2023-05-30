
import { Link } from "react-router-dom";
function Header() {
    return(
        <header>
            <nav className="nav">
                <div className="header-logo">
                    <Link to='/'>
                    <img className="header-img"src="https://i.imgur.com/BlaTLmR.png"></img>
                    </Link>
                </div>
            <ul>
                <li>
                <Link to="/">
                <h1>Your Gallery</h1>
            </Link>
            </li>
            <li>
                <h1>Artists</h1>
            </li>
            <li>
            <Link to="/addart">
                <h1>Add to Gallery</h1>
            </Link>
            </li>
            <li>
                <h1>Explore Collections</h1>
            </li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;

