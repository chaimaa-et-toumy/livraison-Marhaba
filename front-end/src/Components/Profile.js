import React , {useState,useEffect} from 'react'
import Navbar from './childCompenent/Navbar'
import axios from 'axios'
function Profile() {

	let [data, setdata] = useState([])

	const token_ = localStorage.getItem('token')
	let fetch_ = JSON.parse(token_)
	let role_ = fetch_.role

	console.log(role_)	

	useEffect(() => {
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
	},[]);

		
  return (
     <div className="wrapper" style={{backgroundImage: `url('images/bg-registration-form-1.jpg')`}}>
		 <Navbar /> 
		  <div className="inner" style={{padding : "45px", marginTop:"70px"}}> 
			 <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 w-50">
					<div className="card h-100 ">
					<div className="card-body ">
						<div className="account-settings">
							<div className="user-profile">
								<div className="user-avatar">
									<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
								</div>
								<div className='text-center pt-4'>
									<div className="user-name h5">username : {data.name}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 w-50">
				<div className="card h-100">
					<div className="card-body">
						<div className="row gutters" style={{marginTop:"80px"}}>
								<div className="mt-3 mb-2" style={{fontSize : "18px"}}>Name : {data.name}</div>
								<div className="mt-3 mb-2" style={{fontSize : "18px"}}>Email : {data.email}</div>
								<div className="mt-3 mb-2" style={{fontSize : "18px"}}>Role : {data.role}</div>
						</div>
					</div>
				</div>
			</div> 
		</div>
	 </div>

  )
  }

export default Profile