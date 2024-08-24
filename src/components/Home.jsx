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
        <img src="https://i.scdn.co/image/ab67616d0000b2734c8f092adc59b4bf4212389d" alt="" height='200px' width='100px'/></Link>

        </ul>
    
    </>)
}
export default Home