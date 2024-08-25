import { Link } from "react-router-dom"
export default function BookDetail(props)
{
    
    const { title, description, category, image ,rating} = props.detail
    return (<>
         <p>Name:{title}</p>
        
        <p>Description:{description}</p>
        <p>Category:{category}</p>
        <img src={image} alt="" />
        <p>⭐{rating}</p>
        <hr />
         <Link to='/BrowseBooks'>Back To Browse</Link>   
    </>)
}