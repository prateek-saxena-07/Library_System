import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
import BookDetail from "./BookDetail";
import Error from './Error'

export default function BookDetails() {
  const [pick, setPick] = useState(null);
  // const [errorpick,setErrorPick]=useState('')
  const params = useParams();
  

  const books = useSelector((state) => state.books);

  useEffect(() => {
    const Picked = books.find((p) => p.title.toLowerCase() === params.title.toLowerCase());
    setPick(Picked);
    // setErrorPick()
  }, [params.title, books]); 
  // console.log('pick', pick.title);
  // console.log('params',params.title);
  if (!pick)
  {  
    return <Error></Error>
  }

  return (
    <>
      {pick ? <BookDetail detail={pick} /> : <p>Book not found</p>}
    </>
  );
}

