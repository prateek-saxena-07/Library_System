import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import BookDetail from "./BookDetail";

export default function BookDetails() {
  const [pick, setPick] = useState(null);
  const params = useParams();
  
  // Access the books state from Redux store
  const books = useSelector((state) => state.books);

  useEffect(() => {
    const Picked = books.find((p) => p.title.toLowerCase() === params.title.toLowerCase());
    setPick(Picked);
  }, [params.title, books]); // Adding dependencies to useEffect

  return (
    <>
      {pick ? <BookDetail detail={pick} /> : <p>Book not found</p>}
    </>
  );
}

