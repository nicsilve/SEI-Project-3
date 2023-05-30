
import { Link } from "react-router-dom";
function Header() {
    return(
        <header style={{ height: "480px", overflow: 'hidden' }}>
            <nav className="nav">
                <h1>Art Vault</h1>
            <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/29/3b/10/293b1080f84881d81f669896223607d4.jpg" />
            <Link to="/">
                    <h1>Home</h1>
                </Link>
                {/* <Link to="/">
                    <h1>Home</h1>
                </Link> */}
            </nav>
        </header>
    )
}

export default Header;

