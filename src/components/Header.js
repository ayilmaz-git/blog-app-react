import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
            <Link to="/" className="navbar-brand">
            <i className="fa-brands fa-react"></i> Reactjs Mini Blog
            </Link>
                <button className='btn btn-light btn-sm' onClick={logout}>Çıkış</button>

            </div>
             
            </nav>
        </header>
    )
}

export default Header
