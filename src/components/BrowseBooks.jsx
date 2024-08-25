import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Books } from './Books';
import { useState } from 'react';

function BrowseBooks() {
    const books = useSelector((state) => state.books);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchMessage, setSearchMessage] = useState('');

    const handleSearch = () => {
        const foundBook = books.find((b) => 
            b.title.toLowerCase() === searchText.toLowerCase()
        );

        if (foundBook) {
            setSearchResult(foundBook);
            setSearchMessage('');
        } else {
            setSearchResult(null);
            setSearchMessage('Book not found');
        }
    };

    return (
        <>
            <input 
                type="text" 
                placeholder="Search by title" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
            <br />
            {searchResult && (
                <div>
                    <h3>Searched Book</h3>
                    <Books key={searchResult.id} details={searchResult} />
                </div>
            )}
            {searchMessage && <p>{searchMessage}</p>}
            <h1>Browse by Category</h1>
            {/* add image to each link according to category */}
            <Link to={`/BrowseBooks/fiction`}>Fiction</Link>
            <Link to={`/BrowseBooks/nonFiction`}>Non-Fiction</Link>
            <Link to={`/BrowseBooks/horror`}>Horror</Link>
            <Link to={`/BrowseBooks/sciFi`}>Sci-Fi</Link>
            <hr />
            <br />
            <h2>All Books</h2>
            {books.map((b) => (
                <Books key={b.id} details={b} />
            ))}
        </>
    );
}

export default BrowseBooks;
