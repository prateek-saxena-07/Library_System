import { useState, useEffect } from "react";
import { Books } from "./Books";
import { Link } from "react-router-dom";
import data from "../utils/mockdata";


function BrowseBooks() {
    const [book, setBook] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [searchMessage, setSearchMessage] = useState("");
  
    
    useEffect(() => {
        setBook(data);
    }, []);

    const handleSearch = () => {
        const foundBook = book.find((b) => 
            b.title.toLowerCase() === searchText.toLowerCase()
        );

        if (foundBook) {
            setSearchResult(foundBook);
            setSearchMessage("");
        } else {
            setSearchResult(null);
            setSearchMessage("Book not found");
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
                    <Books key={searchResult.id} details={searchResult}  />
                </div>
            )}

            {searchMessage && <p>{searchMessage}</p>}
            <h1>Browse by Category</h1>
            <Link to={`/BrowseBooks/fiction`}>Fiction </Link>
            <Link to={`/BrowseBooks/nonFiction`}> Non-Fiction</Link>
            <Link to={`/BrowseBooks/horror`}> Horror</Link>
            <Link to={`/BrowseBooks/sciFi`}> Sci-fi</Link>
            <hr />
            <br />
            <h2>All Books</h2>
            {book.map((b) => (
                <Books key={b.id} details={b} />
            ))}

           
        </>
    );
}

export default BrowseBooks;
