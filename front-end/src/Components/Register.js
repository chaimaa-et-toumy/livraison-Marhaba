import React from "react";
import Input from "./childCompenent/Input";
import { Link } from "react-router-dom";

function Register() {
    return (
      <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
          <div className="inner">
              <div className="image-holder">
                  <img src="images/registration-form-1.jpg" alt="" />
              </div>
              <form action="" className="mt-4">
                  <h3>Marhaba</h3>
                  <Input class="form-wrapper" type="text" placeholder="Username" classInput="form-control" classIcon="zmdi zmdi-account" />
                  <Input class="form-wrapper" type="text" placeholder="Email Address" classInput="form-control" classIcon="zmdi zmdi-email" />
                  <Input class="form-wrapper" type="password" placeholder="Password" classInput="form-control" classIcon="zmdi zmdi-lock" />
                  <Input class="form-wrapper" type="password" placeholder="Confirm Password" classInput="form-control" classIcon="zmdi zmdi-lock" />
                  <div className="form-wrapper">
                    <select class="form-control" style={{fontSize : "13.5px"}}>
                        <option selected>select Role</option>
                        <option value="1">User</option>
                        <option value="2">Livreure</option>
                    </select>
                    <i className="zmdi zmdi-account"></i>
                    </div>
                  <button>Register
                      <i className="zmdi zmdi-arrow-right"></i>
                  </button>
                  <div className="text-center mt-4">Already have account <Link className="text-dark fw-bold" to={'/Login'}>Login</Link> </div>
              </form>
          </div>
      </div>
    );
  }
  
  export default  Register 
  