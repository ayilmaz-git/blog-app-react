import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
            <Link to="/" className="navbar-brand">
            <i className="fa-brands fa-react"></i> Reactjs Blog
            </Link>
            
            <div className="collapse navbar-collapse">
                   <ul className="navbar-nav ml-auto">
                   <li className="nav-item p-2"><Link to="/blogs" activeClassName="nav-link active" style={{color: 'lightslategray'}}>Blogs</Link></li> |
                        <li className="nav-item p-2"> <Link to="/create" activeClassName="nav-link active" style={{color: 'lightslategray'}}>Create</Link></li>
                        
                    </ul>
                </div>
                <button className='btn btn-light btn-sm' onClick={logout}>Çıkış</button>

            </div>
             
            </nav>
        </header>
    )
}

export default Header
