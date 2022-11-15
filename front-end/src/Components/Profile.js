import React , {useEffect, useState} from 'react'
// import Navbar from './childCompenent/Navbar'
 import axios from 'axios'
function Profile() {
	let [message, setMessage] = useState()
	const token_ = localStorage.getItem('token')
	let fetch_ = JSON.parse(token_)
	let role_ = fetch_.role
	// let name_ = fetch_.name
	// let email_ = fetch_.email
	// document.write(role_)	

	useEffect(() => {

		axios.get(`http://localhost:8080/api/user/${role_}/me`,{
		headers: {
			"Authorization": "Bearer " + token_
		}
		})
		.then((Response)=>{
			setMessage(Response.data)
			console.log(Response.data);
			console.log(message)
			
		}).catch((Error)=>{
			setMessage(Error.response.data);
		})

	},message);
	
	

	
  return (
    //  <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
	// 	 <Navbar /> 
	// 	  <div className="inner" style={{padding : "45px", marginTop:"70px"}}> 
	// 		 <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 w-50">
	// 				<div class="card h-100 ">
	// 				<div class="card-body ">
	// 					<div class="account-settings">
	// 						<div class="user-profile">
	// 							<div class="user-avatar">
	// 								<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
	// 							</div>
	// 							<div className='text-center pt-4'>
	// 								<h5 class="user-name">username : {name_}</h5>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 w-50">
	// 			<div class="card h-100">
	// 				<div class="card-body">
	// 					<div class="row gutters">
	// 							<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Name : </div>
	// 							<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Email : </div>
	// 							<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Phone :</div>
	// 							<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Address :</div>
	// 							<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Role : </div>
	// 					</div>
	// 					<div class="d-flex justify-content-center">
	// 							<div class="text-right d-flex justify-content-centre">
	// 								<button type="button" id="submit" name="submit" class="btn btn-dark">update</button>
	// 							</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div> 
	// 	</div>
	//  </div>

	<div>
		{message}
	</div>
  )
  }

export default Profile