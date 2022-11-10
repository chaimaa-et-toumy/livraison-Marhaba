import React from 'react'
import Input from './childCompenent/Input'

function ResetPassword() {
  return (
    <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
    <div className="inners">
      <form action="">
        <h2 className="text-center">Marhaba</h2>
          <p className="form-wrapper text-center mt-4 mb-4">reset your password</p>       
          <Input 
          className="form-wrapper" 
          type="password" 
          placeholder="password" 
          name="password"  
          classInput="form-control" 
          classIcon="zmdi zmdi-email" 
          />     
          <Input 
          className="form-wrapper" 
          type="password" 
          placeholder="confirm password" 
          name="confirm_password"  
          classInput="form-control" 
          classIcon="zmdi zmdi-email" 
          />             
          <button>reset
            <i className="zmdi zmdi-arrow-right"></i>
          </button>
        </form>          
    </div>
    </div>
  )
}

export default ResetPassword