import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Library</h1>

            <ul className="genre-list">
                <h2>Genres in this Library</h2>
                <li>Fiction</li>
                <li>Non-Fiction</li>
                <li>Horror</li>
                <li>Sci-fi</li>
            </ul>

            <ul className="popular-books">
                <Link to="/PopularBooks" className="link-text">
                    Popular Books <br />
                    <img
                        src="https://variety.com/wp-content/uploads/2022/11/Sonic-Frontiers.jpg"
                        alt="Popular Book"
                        height="250px"
                    />
                </Link>
            </ul>
        </div>
    );
}

export default Home;
