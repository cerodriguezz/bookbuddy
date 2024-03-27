import { useEffect } from "react";
import {login} from "../api";
import { useOutletContext } from "react-router-dom";

export default function Login () {
    const {values: {email, password, token}, setters: {setEmail, setPassword} } = useOutletContext ()
    useEffect(() => {
        login(setEmail, setPassword);
            
        if (token) {
            
        }
    }, []);
    async function handleSubmit(e) {
        e.preventDefault();
        
        const data = await login(email, password);

        console.log('data:', data);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email: {' '}
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password: {' '}
                <input type="password" value={password} onChange={(e)=> {setPassword (e.target.value)}} />
            </label>
            <button>Submit</button>
        </form>
    )

}