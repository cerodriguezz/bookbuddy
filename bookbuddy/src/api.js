import App from "./App";


export const fetchBooks = async (setBooks) => {
    try { 
        const response = await fetch (
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        const booksData = await response.json();
        console.log("Books Data:", booksData); // Log the books data
        setBooks (booksData.books); // Set books directly to the array of objects
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};
