import { Link } from "react-router-dom"
function Home() {
    return (<>
    
        <h1>Welcome Message</h1>
        <ul>
            Genres in this Library
            <li>Fiction</li>
            <li>Non-Fiction</li>
            <li>Horror</li>
            <li>Sci-fi</li>
        </ul>

        <ul><Link to="/PopularBooks">Popular Books <br />
            <img src="https://variety.com/wp-content/uploads/2022/11/Sonic-Frontiers.jpg" alt="" height="250px" />
    </Link>

        </ul>
    
    </>)
}
export default Home