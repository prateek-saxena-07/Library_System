import { Link } from "react-router-dom"
export function Books(props)
{
    const { title, description, category, img } = props.details
    


    return (<>
        <Link to={`/BrowseBooks/${category}/${title}`}> <p>Name:{title}</p></Link>
        
        <p>Description:{description}</p>
        <p>Category:{category}</p>
        <img src={img} alt="" />
        <hr />



    </>)
}