import { Link } from "react-router-dom"
// import '../App.css'
export function Books(props)
{
    const { title,category, image:img } = props.details
    


    return (<>
        
        <div className="book">
            <p>Name:{title}</p>
            <p>Category:{category}</p>
            <img src={img} alt="" height="200px" width="200px"/>
            <br />
            <Link to={`/BrowseBooks/${category}/${title}`}> View Details</Link>
        </div>
        



    </>)
}