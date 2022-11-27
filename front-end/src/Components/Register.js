import React, { useState} from "react";
import Input from "./childCompenent/Input";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";


import axios from "axios";

function Register() {

  let initialValues = {name:"",email:"",password:"",confirm_password:"", role:"" , msg:""}
  let [errors, setErrors] = useState({...initialValues})
  let [formValues, setFormValues] = useState({...initialValues})
  console.log(formValues)


  const url = 'http://localhost:8080/api/auth/register'
  // const data = {}

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormValues({...formValues, [name] : value})
    setErrors({...errors, [name]: ""})
  }

 
  const handleSubmit = async(e) => {
    e.preventDefault()
    let err = false;
    let c = {name:"",email:"",password:"",confirm_password:"", role:""}
    const regexUsername = /^[A-Za-z ]{4,}$/;
    const regexEmail = /[a-z][0-9]*@[a-z]+\.[a-z]{2,3}/;

    if(!formValues.name){
      c.name = "Username is required"
      err=true
    }
    if(!regexUsername.test(formValues.name)){
      c.name = "Enter a valid name"
      err=true
    }
    if(!formValues.email){
      c.email = "Email is required!"
      err=true
    }
    if(!regexEmail.test(formValues.email)){
      c.email = "This is not a valid email format"
      err=true
    }
    if(!formValues.password){
      c.password = "Password is required!"
      err=true
    }
    if(formValues.password.length < 4) {
      c.password = "Password must be more than 4 characters"
      err=true
    }
    if(!formValues.confirm_password){
      c.confirm_password = "Confirm password is required!"
      err=true
    }
    if(formValues.password !== formValues.confirm_password){
      c.confirm_password = "enter the same password"
      err=true
    }
    if(!formValues.role){
      c.role = "role is required!"
      err=true
    }

    if(err) {
      setErrors(c)
    }

     if(!err){
      await axios.post(url,formValues)
      .then((response)=>{
        console.log(response.data.msg)           
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `<div class="fs-5">${response.data.msg}<div>`,
            showConfirmButton: false,
            footer: `<button><a href="/Login" class='text-white fw-bold'>Login</a></button>` ,
            timer: 4000
          })
      })
      .catch((err)=>{
        console.log(err)
        setErrors({email:err.response.data}); 
      })  
    }
     
  }

  return (
  <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
    <div className="inner">
        <div className="image-holder">
          <img src="images/registration-form-1.jpg" alt="img" />
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
            <h3>Marhaba</h3>
            <p className="text-danger">{errors.name}</p>
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
            <div className="text-danger">{errors.confirm_password}</div>
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
            <div className="text-danger">{errors.role}</div>
            <div className="form-wrapper">
              <select className="form-control" name="role" onChange = {handleChange}  style={{fontSize : "13.5px"}}>
                <option selected disabled>select Role</option>
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