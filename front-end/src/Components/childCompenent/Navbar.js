import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const token_ = localStorage.getItem('token')
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
    <Link className="navbar-brand fw-bold" to={'/'}>Marhaba</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto" style={{fontSize : "18px"}}>
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}>Home</Link>
                </li>
                {
                // condition token
                  token_ ? <li className='nav-item'>
                  <Link className="nav-link fw-bold" to={'/logout'}>Logout</Link>
                </li> : 
                <ul className="navbar-nav ml-auto" style={{fontSize : "18px"}}>
                  <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>Login</Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link" to={'/Register'}>Register</Link>
                  </li>
                </ul>
                }
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Register'}>Register</Link>
                </li>
                <li className='nav-item'>
                  <Link className="nav-link fw-bold" to={'/logout'}>Logout</Link>
                </li> */}
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar