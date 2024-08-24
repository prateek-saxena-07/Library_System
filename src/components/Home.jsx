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
    </Link>

        </ul>
    
    </>)
}
export default Home