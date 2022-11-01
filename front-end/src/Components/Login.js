import React from "react";
import Input from "./childCompenent/Input";
import { Link } from "react-router-dom";

function Login() {
    return (
      <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
          <div className="inner">
              <div className="image-holder">
                  <img src="images/registration-form-1.jpg" alt="" />
              </div>
              <form action="" style={{marginTop : "75px"}}>
                  <h3>Marhaba</h3>
                  <Input class="form-wrapper" type="text" placeholder="Email Address" classInput="form-control" classIcon="zmdi zmdi-email" />
                  <Input class="form-wrapper" type="password" placeholder="Password" classInput="form-control" classIcon="zmdi zmdi-lock" />
                  <button>Login
                      <i className="zmdi zmdi-arrow-right"></i>
                  </button>
                  <Link className="nav-link mt-4 text-dark text-center" to={'/Forgotpassword'}>Forgot password ?</Link>

              </form>
          </div>
      </div>
    );
  }
  
  export default  Login 
  