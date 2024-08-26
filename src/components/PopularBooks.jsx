import { useSelector } from 'react-redux'
import { Books } from './Books'
function PopularBooks()
{
    const books = useSelector((state) => state.books);
    const fiveStarBooks = books.filter((book) => book.rating === 5);

  return (
      
    <div>
      <h1>Popular Books (🌟🌟🌟🌟🌟)</h1>
        <div className='bookcontainer'>
      
      {fiveStarBooks.length > 0 ? (
        fiveStarBooks.map((book) => (
          <Books key={book.title} details={book} />
        ))
      ) : (
        <p>No 5-star books available</p>
              )}
              
        </div>
    </div>
);

}
export default PopularBooks