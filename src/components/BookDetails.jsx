import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
import BookDetail from "./BookDetail";

export default function BookDetails() {
  const [pick, setPick] = useState(null);
  const params = useParams();
  

  const books = useSelector((state) => state.books);

  useEffect(() => {
    const Picked = books.find((p) => p.title.toLowerCase() === params.title.toLowerCase());
    setPick(Picked);
  }, [params.title, books]); 

  return (
    <>
      {pick ? <BookDetail detail={pick} /> : <p>Book not found</p>}
    </>
  );
}

