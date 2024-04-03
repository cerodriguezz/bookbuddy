import { Link, useOutletContext } from "react-router-dom"
import { fetchreservations, fetchusers, fetchreservationsId } from "../api"
import { useEffect, useState } from "react"

export default function Account (){
    const { values: {token, reservations, users, reservationsId}, setters: {setReservations, setUsers, setReservationsid}} = useOutletContext ()

    useEffect(() => {
        fetchreservations(reservations);
        fetchusers(users);
        if (token) {

        }
    }, [token]);
    return(
        <div>
            <p>hello</p>
            <li>
            {reservations.length > 0 &&
            reservations.map((reservation) => (
                <li key={reservation.id}>
                    {/* <Link to = {`/reservations/${reservation.id}`}>{reservation.title} {reservation.coverimage}</Link> */}
                    <h3>{reservation.title}</h3>
                    <img src= {reservation.coverimage} alt={reservations.title} />
                    <p>By: {reservation.author}</p>
                </li>

            ))}
            </li>
            {/* {users.length > 0 && 
            users.map((user) => (
                <li key={user.id}>
                    <Link to = {`/users/${user.id}`}></Link>
                </li>
            ))} */}
        </div>
    )
};