import { Link } from "react-router-dom"

export default function BookDetail(props) {
    const { title, description, category, image, rating } = props.detail;

    return (
        <div className="book-detail">
            <h1>{title}</h1>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Category:</strong> {category}</p>
            <img src={image} alt={`${title} cover`} />
            <p className="rating">⭐{rating}</p>
            <hr />
            <Link to='/BrowseBooks'>Back To Browse</Link>
        </div>
    );
}
