import { useOutletContext, useParams } from "react-router-dom";

const SingleBook = () => {
    const { bookId } = useParams()
    const {values: { books }} = useOutletContext()
    const book = books.find((book) => bookId === book.id)
}

export default SingleBook