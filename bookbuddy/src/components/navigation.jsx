import {Link} from 'react-router-dom'
export default function Navigation () {
    return (
        <div>
            <Link to = '/'>Books</Link>
            <Link to = '/account'>Account</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/register'>Register</Link>
        </div>
    )
}