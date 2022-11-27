import React, { useState} from "react";
import Input from "./childCompenent/Input";
import {Link} from "react-router-dom";

import axios from "axios";

function Login() {

  let initialValues = {email:"",password:""}
  let [errors, setErrors] = useState({...initialValues})
  let [formValues, setFormValues] = useState({...initialValues})

  const url = 'http://localhost:8080/api/auth/login'
  // const data = {}

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormValues({...formValues, [name] : value})
    setErrors({...errors, [name]: ""})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    let err = false;
    let c = {email:"",password:""}
  
    if(!formValues.email){
      c.email = "Email is required!"
      err=true
    }

    if(!formValues.password){
      c.password = "Password is required!"
      err=true
    }

    if(err) {
      setErrors(c)
    }
    if(!err){
      await axios.post(url,formValues)
      .then((response)=>{
        console.log(response.data)
        localStorage.setItem("token",JSON.stringify(response.data))
        window.location = "/profile"
      })
      .catch((err)=>{
        console.log(err.response.data)
        setErrors({email:err.response.data}); 
      })  
    }
     
  }

  return (
  <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
    <div className="inner">
        <div className="image-holder">
          <img src="images/registration-form-1.jpg" alt="img"/>
            </div>
            <form style={{marginTop:"95px"}} onSubmit={handleSubmit}>
            <h3>Marhaba</h3>
            <div className="text-danger">{errors.email}</div>
            <Input 
              className="form-wrapper" 
              type="text" 
              placeholder="Email Address" 
              name="email"  
              classInput="form-control" 
              classIcon="zmdi zmdi-email" 
              value={formValues.email}
              onChange = {handleChange}
            />
            <div className="text-danger">{errors.password}</div>
            <Input 
              className="form-wrapper" 
              type="password" 
              placeholder="Password" 
              name="password"  
              classInput="form-control" 
              classIcon="zmdi zmdi-lock" 
              value={formValues.password}
              onChange = {handleChange}
              />
            <button>Login
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
            <div className="text-center mt-4"><Link className="text-dark fw-bold" to={'/forgotpassword'}>Forgot password</Link> </div>
            <div className="text-center mt-3">don't hava an account <Link className="text-dark fw-bold" to={'/register'}>Register</Link> </div>
        </form>
      </div>
  </div>
    );
  }
  
  export default  Login 