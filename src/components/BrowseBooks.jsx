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
        const foundBook = books.filter((b) => 
            b.title.toLowerCase().includes(searchText.toLowerCase())
        );

        if (foundBook.length>0) {
            setSearchResult(foundBook);
            setSearchMessage('');
        } else {
            setSearchResult(null);
            setSearchMessage('Book not found');
        }
    };
console.log(searchResult)
    return (
        <>
            
        
           
            <u>
                <h1 style={{ padding: '35px' }}>Browse by Category</h1>
            </u>
    
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
            
            <u>
                <h1>Search Books</h1>
            </u>
            <input 
                type="text" 
                placeholder="Search by title" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
            />
            <center><button onClick={handleSearch} className='searchbutton'>Search</button></center>
            <br />
             {searchResult && (
                <div>
                    <div className='bookcontainer'>
                    
                        {searchResult.map((book) => (<Books details={book} key={Date.now()} />))}
                    
                    </div>
                   
                    
                </div>
            )}
            {searchMessage && <p>{searchMessage}</p>}
            <hr />
            <u>
                <h1>All Books</h1>
            </u>
            <div className="bookcontainer">
                {books.map((b) => (
                    <Books details={b}  />
                ))}
            </div>
        </>
    );
}

export default BrowseBooks;
