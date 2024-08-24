import { useState, useEffect } from "react";
import { Books } from "./Books";
import { Link } from "react-router-dom";



function BrowseBooks() {
    const [Book, setBook] = useState([]);
    const [category, setCategory] = useState({
        fiction: [], nonFiction: [], horror: [], sciFi: [], Uncategorized: [],
    });

    const Fetching = async () => {
        try {
            const response = await fetch('https://freetestapi.com/api/v1/books');
            const data = await response.json();
            console.log('Fetched Books:', data); // Log the fetched books
            const sortedBooks = categorizeBooks(data);
            console.log('Sorted Books:', sortedBooks); // Log the sorted books
            setCategory(sortedBooks);
            setBook(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        Fetching();
    }, []);

    const categorizeBooks = (books) => {
        const sortedBooks = { fiction: [], nonFiction: [], horror: [], scifi: [], uncategorized: [], };
        books.forEach(book => {
            const category = categorizeBook(book).toLowerCase();
            console.log(`Book: ${book.title}, Category: ${category}`); // Log each book and its category
            sortedBooks[category].push(book);
            
        });

        return sortedBooks;
    };

    const normalizeGenre = (genre) => genre.toLowerCase();

    const categorizeBook = (book) => {
        const fictionCategories = ['fiction', 'classic', 'romance', 'adventure', 'historical fiction', 'social commentary', 'philosophical fiction', 'satire', 'children\'s literature', 'magical realism', 'war'];
        const horrorCategories = ['horror', 'gothic'];
        const sciFiCategories = ['science fiction', 'dystopian'];
        const nonFictionCategories = ['non-fiction', 'biography', 'memoir', 'self-help', 'true crime'];

        const normalizedGenres = book.genre.map(normalizeGenre);
        console.log(`Normalized Genres for ${book.title}:`, normalizedGenres);

        if (normalizedGenres.some(genre => fictionCategories.includes(genre))) return 'Fiction';
        if (normalizedGenres.some(genre => horrorCategories.includes(genre))) return 'Horror';
        if (normalizedGenres.some(genre => sciFiCategories.includes(genre))) return 'SciFi';
        if (normalizedGenres.some(genre => nonFictionCategories.includes(genre))) return 'NonFiction';
        return 'Uncategorized';
    };


    
    console.log('Category State:', category); // Log the category state





    return (
        <>
            <input type="text" placeholder="Search by title" />
            <br />
            <h1>Browse by Category</h1>
            {/* {Book.map((book) => <Books key={book.id} details={book} />)} */}
            {/* Imp mapping data to the component */}
{/* {console.log("category name",Object.keys(category)[0])} */}
            <Link to={`/BrowseBooks/${Object.keys(category)[0]}`}>Fiction </Link>
            <Link to={`/BrowseBooks/${Object.keys(category)[1]}`}> Non-Fiction</Link>
            <Link to={`/BrowseBooks/${Object.keys(category)[2]}`}> Horror</Link>
            <Link to={`/BrowseBooks/${Object.keys(category)[3]}`}> Sci-fi</Link>
            <Link to={`/BrowseBooks/${Object.keys(category)[4]}`} >Mixed</Link>
        </>
    );
}

export default BrowseBooks;
