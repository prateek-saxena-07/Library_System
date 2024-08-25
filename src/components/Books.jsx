import { Link } from "react-router-dom"
export function Books(props)
{
    const { title,category, image:img } = props.details
    


    return (<>
        
        <p>Name:{title}</p>
        {/* <p>Description:{description}</p> */}
        <p>Category:{category}</p>
        <img src={img} alt="" />

        <Link to={`/BrowseBooks/${category}/${title}`}> View Details</Link>
        <hr />



    </>)
}