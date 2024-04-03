import Navigation from './Navigation'
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState({})
  const [books, setBooks] = useState([]);
  const [singleBook, setSingleBook] = useState({})
  const [reservations, setReservations] = useState([])
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // const [value, setterFunction] = useState()
  
  // const state1 = useState()
  // const value = state1[0]
  // const setterFunction = state1[1] 
  
  const contextObj = {
    setters: { setToken, setUser, setBooks, setSingleBook, setFirstname, setLastname, setEmail, setPassword, setReservations},
    values: { token, user, books, singleBook, firstname, lastname, email, password, reservations}
  }

  return (
    <div>
      <h1><img></img>Book Buddy</h1>
      <Navigation />
      <Outlet context={contextObj}/>
    </div>
  );
}

export default Home