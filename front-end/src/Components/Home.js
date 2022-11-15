import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./childCompenent/Navbar";

function Home() {
    return (
      <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
        {
        <Navbar/>
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
  