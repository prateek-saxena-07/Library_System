import { useParams } from "react-router-dom"
export default function ()
{

    console.log(useParams().title)
    return (<>
    hi from Book Details</>)
}
// this current component will sort particular book of which detail has to render
// and make one more component to render the book detail of that single  book that has been picked here 
