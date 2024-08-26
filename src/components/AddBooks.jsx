import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBooks() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('fiction');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState(1);
    const [author,setAuthor]=useState('')
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !category || !image|| !author) {
            setError('All fields are required');
            return;
        }

        const newBook = {
            title,
            description,
            category,
            image,
            rating,
            author,
        };

        dispatch(addBook(newBook));
        navigate('/BrowseBooks');
    };

    return (
        <div className="formcontainer">
            <form onSubmit={handleSubmit}>
                <div >
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Author</label>
                    <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="fiction">Fiction</option>
                        <option value="nonFiction">Non-Fiction</option>
                        <option value="horror">Horror</option>
                        <option value="sciFi">Sci-Fi</option>
                    </select>
                </div>
                <div>
                    <label>Image URL</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBooks;
