import React, { useState , useEffect } from "react";
import Input from "./childCompenent/Input";
import { Link } from "react-router-dom";
import axios from "axios";


function Login() {
    const InitialValues = {email:"", password:""}
    const [data, setDataValues] = useState(InitialValues)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setDataValues({...data , [name] : value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await setErrors(validate(data))
        console.log(errors);
        setIsSubmit(true)

    try {
        const url = 'http://localhost:8080/api/auth/login'
        const{data:res} = await axios.post(url,data)
        localStorage.setItem("token",res.data)
        window.location = "/"
    } catch (error) {
        console.log(error)
        setErrors({email:error.response.data}); 

    }
      }
      useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmit){
          console.log(data)
        }
      },[errors])

      const validate = (values) =>{
        const errors = {}
        

        if(!values.email){
          errors.email = "Email is required!"
          
        }
        if(!values.password){
          errors.password = "Password is required!"
          
        }
        return errors
      }


    return (
      <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
          <div className="inner">
              <div className="image-holder">
                  <img src="images/registration-form-1.jpg" alt="" />
              </div>
              <form action="" style={{marginTop : "75px"}} onSubmit={handleSubmit}>
                  <h3>Marhaba</h3>
                  <p className="text-danger">{errors.email}</p>
                  <Input 
                    className="form-wrapper" 
                    type="text" name="email" 
                    placeholder="Email Address" 
                    classInput="form-control" 
                    classIcon="zmdi zmdi-email"
                    value={data.email} 
                    onChange = {handleChange}
                  />
                  <p className="text-danger">{errors.password}</p>
                  <Input 
                    className="form-wrapper" 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    classInput="form-control" 
                    classIcon="zmdi zmdi-lock" 
                    value={data.password} 
                    onChange = {handleChange}
                  />
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
  