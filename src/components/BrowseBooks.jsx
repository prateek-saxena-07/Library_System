import { useState, useEffect } from "react"
import { Books } from "./Books"
function BrowseBooks()
{
    const [Book, setBook] = useState([])
    
    const Fetching = async () => {
        const response = await fetch('https://freetestapi.com/api/v1/books')
        const data = await response.json()
        
        setBook(data)
    
    }
    useEffect(() => {
        Fetching()
    
    }, [])

    return (<>
        
        <input type="text" placeholder="Search by title" />
        <br />
        {Book.map((book) => { return <Books details={book}></Books> })}  
        {/* Imp mapping data to the component */}
       
    </>)
}

export default BrowseBooks