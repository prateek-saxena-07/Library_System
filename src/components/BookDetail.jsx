import { Link } from "react-router-dom"

export default function BookDetail(props) {
    const { title, description, category, image, rating ,author} = props.detail;
    const stars='⭐'.repeat(rating)
    return (
        <div className="book-detail">
            <h1>{title}</h1>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Author:</strong> {author}</p>
            <img src={image} alt={`${title} cover`} height="100px" width="100px"/>
            <p className="rating">Rating &nbsp;{stars}</p>
            <hr />
            <Link to='/BrowseBooks'>Back To Browse</Link>
        </div>
    );
}
