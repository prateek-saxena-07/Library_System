import { useState, useEffect } from "react";
import data from "../utils/mockdata";
import { Books } from "./Books";
import { useParams } from "react-router-dom"

export default function BookCategory()
{ const [Category, setCategory] = useState({
        fiction: [], nonFiction: [], horror: [], sciFi: [],
});
const params=useParams().category
   
useEffect(()=>{ const sortedCategory = {
        fiction: data.filter(book => book.category ==='Fiction'  ),
        nonFiction:data.filter(book => book.category === 'Non-Fiction'  ),
        horror:data.filter(book => book.category === 'Horror' ),
        sciFi:data.filter(book => book.category === 'Sci-Fi'),
    }
    
    setCategory(sortedCategory);}
    , [])


    // console.log(params.category)
    // console.log(Object.keys(category))
    // console.log("params",params)
    console.log("particular category", Category[params])
    // console.log("particular category", Category.params)
    //imp  ==>When you write Category.params, JavaScript looks for a property called params within the Category object. Since there is no params property, the result is undefined.
//     Bracket Notation for Objects: In JavaScript, objects are collections of key-value pairs, where each key is a unique identifier (property) associated with a value. When you want to access a property of an object, you can use dot notation (e.g., object.property) if you know the property name at the time of writing the code.

// Bracket Notation: When you need to access a property dynamically (i.e., when the property name is stored in a variable), you use bracket notation. In this case, the syntax Category[params] is correct because params holds the name of the property you want to access.
    const bookSelect = Category[params];
    return (<>
        
        {bookSelect.map((book) => {
            return <><Books details={book} params={params}></Books> </>
        })}
        sorting
    </>)
}  


//this page add as a link between pages