
import { Link } from "react-router-dom";
function Header() {
    return(
        <header>
            <nav className="nav">
                <div className="header-logo">
                    <Link to='/'>
                    <img className="header-img"src="https://i.imgur.com/BlaTLmR.png" alt='logo'></img>
                    </Link>
                </div>
            <ul>
                <li>
                <Link to="/">
                <h1>Your Gallery</h1>
            </Link>
            </li>
            <li>
            <Link to="/addart">
                <h1>Add to Gallery</h1>
            </Link>
            </li>
            <li>
                <Link to='/collections'>
                <h1>Explore Collections</h1>
                </Link>
            </li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;

