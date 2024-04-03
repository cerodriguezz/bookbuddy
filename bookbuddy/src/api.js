import { json } from "react-router-dom";

export const fetchBooks = async (setBooks) => {
    try { 
        const response = await fetch (
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books",
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

export const login = async (email, password) => {
    try {
        const response = await fetch (
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const result = await response.json();
        console.log (result)
        if (response.ok) {
            localStorage.setItem ('token',)
        }
        return result
    } catch (err) {
        console.error(err);
    }
};

export const register = async (firstname, lastname, email, password) => {
    try {
        const response = await fetch (
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",  
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
            }),
        });
        const result = response.json();
        console.log(result);
        return result
    } catch(err) {
        console.log(err);
    }
};

export const singlebook = async (bookId) => {
    try {
        console.log(bookId)
        const response = await fetch (
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,   
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        const result = await response.json();
        return result.book;
    } catch (err) {
        console.error(err);
    }
};

export const handleclick = async (bookId) => {
    try {
        console.log(bookId)
        const response = await fetch (
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,
            {
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body:
                    JSON.stringify ({
                        available:false,

                    }),
                
        });
        const result = await response.json();
        console.log(result)
        return result;
    } catch (err) {
        console.error(err);
    }
};

export const fetchreservations = async () => {
    try{
        const response = await fetch (
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }); const result = await response.json();
                return result;
        } catch (err) {
            console.error(err);
        }       
};

export const fetchreservationsId = async (reservationsId) => {
    try{    
        const response = await fetch (
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationsId}`,
            {
                method: "DELETE",
            })
            .then (response => response.json())
            .then (result => {
                console.log(result);
            })
    }       catch(err) {
        console.error(err);
    }
};

export const fetchusers = async (users) => {
    try{
        const response = await fetch (
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }); const result = await response.json();
            return result;
        } catch (err) {
            console.error(err);
        }    
};