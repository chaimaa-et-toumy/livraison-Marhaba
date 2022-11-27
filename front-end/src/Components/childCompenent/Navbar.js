import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
    const token_ = localStorage.getItem('token')

    function logout(){
      axios.get('http://localhost:8080/api/auth/logout')
      .then((response)=>{
        console.log(response)
        if(token_){
          localStorage.removeItem('token')
          window.location = "/"
        }})
        .catch((err)=>{
        console.log(err)
      })
      
    }
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
                  token_ ? 
                  <li className="nav-link fw-bold" role="button" onClick={logout}>Logout</li>
                 : 
                <ul className="navbar-nav ml-auto" style={{fontSize : "18px"}}>
                  <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>Login</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to={'/Register'}>Register</Link>
                  </li>
                </ul>
                }
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar