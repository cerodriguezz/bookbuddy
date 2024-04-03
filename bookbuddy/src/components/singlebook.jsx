import { useOutletContext, useParams } from "react-router-dom";
import { singlebook, handleclick } from "../api";
import { useEffect, useState } from "react";


// export default function singlebook(){
// const {values: {book, token} setters: {setBook}} = useOutletContext ()


const SingleBook = () => {
 
    const { bookId } = useParams()
    const [book, setBook] = useState({})  
    useEffect(() => {
        singlebook(bookId).then(setBook);
    

    }, [])
    console.log(book)


    return (
        <>
        
        <div>{book.title}</div>
        <div>{book.description}</div>
        <button onClick={()=>handleclick(bookId)}>Check Out Book</button>
        <img src={book.coverimage} alt={book.title} />
       
        </>
    )
}


export default SingleBook