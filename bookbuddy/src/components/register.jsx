import { useEffect } from "react";
import { register } from "../api";
import { useOutletContext } from "react-router-dom";

export default function Register () {
    const {values: {firstname, lastname, email, password, token}, setters: {setFirstname, setLastname, setEmail, setPassword} } = useOutletContext ()
    useEffect(() => {
        register(setFirstname, setLastname, setEmail, setPassword);

        if (token) {

        }
    }, []);
    async function handleSubmit(e) {
        e.preventDefault();

        const data = await register(firstname, lastname, email, password);

        console.log('data:', data);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register!</h2>
            <label>
                Firstname: {' '}
                <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </label>
            <label>
                Lastname: {' '}
                <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </label>
            <label>
                Email: {' '}
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password: {' '}
                <input type="password" value={password} onChange={(e) => {setPassword (e.target.value)}} />
            </label>
            <button>Register!</button>
        </form>
    )

}
