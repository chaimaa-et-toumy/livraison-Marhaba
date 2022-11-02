import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
        {
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <Link className="navbar-brand fw-bold" to={'/'}>Marhaba</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto" style={{fontSize : "18px"}}>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/Login'}>Login</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/Register'}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        }
        <div>
          <h2 className="fs-4 text-center d-flex justify-content-center">Welcome to our Application Marhaba</h2>
          <Link className="nav-link" to={'/Login'}>
            <button className="rounded fw-bold">Login
                        <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </Link>
        </div>

      </div>

    );
  }
  
  export default  Home 
  