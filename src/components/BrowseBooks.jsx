import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Books } from './Books';
import { useState } from 'react';
// import '../App.css'

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
            
        
           
            <h1 style={{ padding: '35px' }}>Browse by Category</h1>
           <hr />
            <div className="category">
  <Link to={`/BrowseBooks/fiction`}>
    <img src="https://picsum.photos/200/300?random=45" alt="" />
    <span>Fiction</span>
  </Link>
  <Link to={`/BrowseBooks/nonFiction`}>
    <img src="https://picsum.photos/200/300?random=46" alt="" />
    <span>Non-Fiction</span>
  </Link>
  <Link to={`/BrowseBooks/horror`}>
    <img src="https://picsum.photos/200/300?random=47" alt="" />
    <span>Horror</span>
  </Link>
  <Link to={`/BrowseBooks/sciFi`}>
    <img src="https://picsum.photos/200/300?random=48" alt="" />
    <span>Sci-Fi</span>
  </Link>
</div>

            <hr />
            <br />
            <br />
            <input 
                type="text" 
                placeholder="Search by title" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
             {searchResult && (
                <div>
                    <h3>Searched Book</h3>
                    <Books key={searchResult.id} details={searchResult} />
                </div>
            )}
            {searchMessage && <p>{searchMessage}</p>}
            <div className="bookcontainer">
                {books.map((b) => (
                    <Books key={b.id} details={b} />
                ))}
            </div>
        </>
    );
}

export default BrowseBooks;
