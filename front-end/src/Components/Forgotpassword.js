import React , {useState} from 'react'
import Input from './childCompenent/Input'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Swal from "sweetalert2";


function Forgotpassword() {
  
  let initialValues = {email:""}
  let [errors, setErrors] = useState({...initialValues})
  let [formValues, setFormValues] = useState({...initialValues})

  const url = 'http://localhost:8080/api/auth/forgetpassword'
  const data = {}

  // response.data.msg

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormValues({...formValues, [name] : value})
    setErrors({...errors, [name]: ""})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    let err = false;
    let c = {email:""}
  
    if(!formValues.email){
      c.email = "Email is required!"
      err=true
    }
    if(err) {
      setErrors(c)
    }
    if(!err){
      await axios.post(url,formValues)
      .then((response)=>{
        toast.info(response.data.msg ,{
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
        setErrors({email:err.response.data}); 
      })  
    }
  }    
    return (
      <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
          <div className="inners">
            <form action="" onSubmit={handleSubmit}>
              <h2 className="text-center">Marhaba</h2>
                <p  className="form-wrapper text-center mt-4 mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>       
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
                <button>Forgot
                  <i className="zmdi zmdi-arrow-right"></i>
                </button>
                <ToastContainer />
              </form>          
          </div>
      </div>
    );
}  
export default  Forgotpassword 
  