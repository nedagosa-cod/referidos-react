import {Link} from 'react-router-dom'

function Navbar() {
  return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/estado">Estado</Link></li>
                <li><Link to="/referir">Referir</Link></li>
                <li>Admin</li>
            </ul>
        </nav>
  )
}

export default Navbar