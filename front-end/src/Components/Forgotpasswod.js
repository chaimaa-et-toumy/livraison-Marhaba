import React from "react";
import Input from "./childCompenent/Input";

function Forgotpassword() {
    return (
      <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
          <div className="inners">
              <form action="">
                  <h2 className="text-center">Marhaba</h2>
                  <p  className="form-wrapper text-center mt-4 mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                  <Input className="form-wrapper" type="text" placeholder="Email Address" classInput="form-control" classIcon="zmdi zmdi-email" />
                  <button>Forgot
                      <i className="zmdi zmdi-arrow-right"></i>
                  </button>
              </form>
          </div>
      </div>
    );
  }
  
  export default  Forgotpassword 
  