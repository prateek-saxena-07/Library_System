import { Link, useLocation } from "react-router-dom";

function Navbar()
{
   const location = useLocation();

    return (
        <nav className="navbar">
            {/* <div className="logo">My Library</div> */}
            <div className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/BrowseBooks" className={location.pathname === "/BrowseBooks" ? "active" : ""}>
                    Browse Books
                </Link>
                <Link to="/AddBooks" className={location.pathname === "/AddBooks" ? "active" : ""}>
                    Add Books
                </Link>
            </div>
        </nav>
    );
}
export default Navbar