import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { fetchBooks } from "../api";

export default function Books() {
    const { values: {books, token}, setters: {setBooks} } = useOutletContext ()
    useEffect(() => {
        fetchBooks(setBooks);
        // fetchReservations(setReservations)
        if (token) {
          // fetchUser
        }
      }, []);
    
    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {books.length > 0 &&
                books.map((book) =>(
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                        <p>{book.available ? "Available" : "Unavailable"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}
