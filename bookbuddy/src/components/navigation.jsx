import {Link} from 'react-router-dom'
export default function navigation () {
    return (
        <div>
            <Link to = '/'>Books</Link>
            <Link to = '/account'>Account</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/register'>Register</Link>
            <Link to = 'singlebook'>Singlebook</Link>
        </div>
    )
}