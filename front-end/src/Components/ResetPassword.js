import React, { useState } from 'react'
import Input from './childCompenent/Input'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ResetPassword() {
  let initialValues = {password:"",confirm_password:""}
  let [errors, setErrors] = useState({...initialValues})
  let [formValues, setFormValues] = useState({...initialValues})

  const url = 'http://localhost:8080/api/auth/resetpassword/:token'
  const data = {}

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormValues({...formValues, [name] : value})
    setErrors({...errors, [name]: ""})
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    let err = false;
    let c = {password:"",confirm_password:""}


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
  
    if(err) {
      setErrors(c)
    }

     if(!err){
      await axios.post(url,formValues)
      .then((response)=>{
        // console.log(response.data)
        toast.info(response.data,{
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
       .catch((err)=>{
        console.log(err)
        setErrors({password:err.response.data}); 
      })  
      }
  }


  return (
    <div className="wrapper" style={{backgroundImage: `url('../images/bg-registration-form-1.jpg')`}}>
    <div className="inners">
      <form action=""  onSubmit={handleSubmit}>
        <h2 className="text-center">Marhaba</h2>
          <p className="form-wrapper text-center mt-4 mb-4">reset your password</p>   
          <p className="text-danger">{errors.password}</p>
          <Input 
          className="form-wrapper" 
          type="password" 
          placeholder="password" 
          name="password"  
          classInput="form-control" 
          classIcon="zmdi zmdi-email"
          value={formValues.password}
          onChange = {handleChange}
          />   
          <p className="text-danger">{errors.confirm_password}</p>  
          <Input 
          className="form-wrapper" 
          type="password" 
          placeholder="confirm password" 
          name="confirm_password"  
          classInput="form-control" 
          classIcon="zmdi zmdi-email" 
          value={formValues.confirm_password}
          onChange = {handleChange}

          />             
          <button>reset
            <i className="zmdi zmdi-arrow-right"></i>
          </button>
          <ToastContainer />
        </form>          
    </div>
    </div>
  )
}

export default ResetPassword