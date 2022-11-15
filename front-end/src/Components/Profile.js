import React , {useState} from 'react'
import Navbar from './childCompenent/Navbar'
import axios from 'axios'
function Profile() {

	let [data, setdata] = useState([])

	const token_ = localStorage.getItem('token')
	let fetch_ = JSON.parse(token_)
	let role_ = fetch_.role

	console.log(role_)	

		axios.get(`http://localhost:8080/api/user/${role_}/me`,{
		headers: {
			"Authorization": "Bearer " + token_
		}
		})
		.then((Response)=>{
			setdata({email:Response.data.email,name:Response.data.name,role:Response.data.role})
			console.log(Response.data);
			
		}).catch((Error)=>{
			console.log(Error.response.data);
		})
  return (
     <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
		 <Navbar /> 
		  <div className="inner" style={{padding : "45px", marginTop:"70px"}}> 
			 <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 w-50">
					<div class="card h-100 ">
					<div class="card-body ">
						<div class="account-settings">
							<div class="user-profile">
								<div class="user-avatar">
									<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
								</div>
								<div className='text-center pt-4'>
									<div class="user-name h5">username : {data.name}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 w-50">
				<div class="card h-100">
					<div class="card-body">
						<div class="row gutters" style={{marginTop:"80px"}}>
								<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Name : {data.name}</div>
								<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Email : {data.email}</div>
								<div class="mt-3 mb-2" style={{fontSize : "18px"}}>Role : {data.role}</div>
						</div>
					</div>
				</div>
			</div> 
		</div>
	 </div>

  )
  }

export default Profile