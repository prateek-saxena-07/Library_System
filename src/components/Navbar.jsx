import {Link} from 'react-router-dom'
function Navbar()
{
    return (<>
        <Link to='/'>Home </Link>
        <Link to='/BrowseBooks'> Browse Books </Link>
         <Link to='/AddBooks'> Add Books</Link>
    </>)
}
export default Navbar