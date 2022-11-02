import React, { useState , useEffect } from "react";
import Input from "./childCompenent/Input";
import {Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Register() {

  const InitialValues = {name:"",email:"",password:"",confirm_password:"", role:""}
  const [formValues, setFormValues] = useState(InitialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const navigate = useNavigate();

  const url = 'http://localhost:8080/api/auth/register'
  const data = {}

  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormValues({...formValues , [name] : value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await setFormErrors(validate(formValues))
    console.log(formErrors);
    setIsSubmit(true)

  await axios.post(url,formValues)
    .then((response)=>{
      console.log(response.data)
      navigate("/EmailVerify")
    })
    .catch((err)=>{
      console.log(err)
      setFormErrors({email:err.response.data}); 
    })
    
  }

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors])

  const validate = (values) =>{
    const errors = {}

    const regexUsername = /^[A-Za-z]{4,7}$/

    const regexEmail = /[a-z][0-9]*@[a-z]+\.[a-z]{2,3}/

    if(!values.name){
      errors.name = "Username is required"
      
    }
    else if(!regexUsername.test(values.name)){
      errors.name = "Enter a valid name"
      
    }
    if(!values.email){
      errors.email = "Email is required!"
      
    }
    else if(!regexEmail.test(values.email)){
      errors.email = "This is not a valid email format"
      
    }
    if(!values.password){
      errors.password = "Password is required!"
      
    }
    else if(values.password.length < 4){
      errors.password = "Password must be more than 4 characters"
    }
    if(!values.confirm_password){
      errors.confirm_password = "Confirm password is required!"
    }
    else if(values.password !== values.confirm_password){
      errors.confirm_password = "enter the same password"
    }
    if(!values.role){
      errors.role = "role is required!"
    }
    return errors
  }

  return (
  <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
    <div className="inner">
        <div className="image-holder">
          <img src="images/registration-form-1.jpg" alt="" />
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
            <h3>Marhaba</h3>
            <p className="text-danger">{formErrors.name}</p>
            <Input 
              className="form-wrapper"
              type="text"
              placeholder="Username"
              name="name"
              classInput="form-control"
              classIcon="zmdi zmdi-account"
              value={formValues.name}
              onChange = {handleChange}
            />
            <div className="text-danger">{formErrors.email}</div>
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
            <div className="text-danger">{formErrors.password}</div>
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
            <div className="text-danger">{formErrors.confirm_password}</div>
            <Input 
              className="form-wrapper" 
              type="password" 
              placeholder="Confirm Password" 
              name="confirm_password"  
              classInput="form-control" 
              classIcon="zmdi zmdi-lock" 
              value={formValues.confirm_password}
              onChange = {handleChange}
            />
            <div className="text-danger">{formErrors.role}</div>
            <div className="form-wrapper">
              <select className="form-control" name="role" onChange = {handleChange}  style={{fontSize : "13.5px"}}>
                <option selected hidden>select Role</option>
                <option>client</option>
                <option>livreur</option>
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
  