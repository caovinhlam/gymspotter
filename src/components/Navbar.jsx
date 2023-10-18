import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className="topnav">
                <Link to='/'>Search</Link>
                <Link to='/map'>Map</Link>
                <Link to='/favourite'>Favourites</Link>
                <Link to='/profile'>Profile</Link>
            </div>
        </div>
    )
}

export default Navbar