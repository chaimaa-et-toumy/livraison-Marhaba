import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function ProtectRoute() {
  const token_ = localStorage.getItem('token')

    return (
      token_ ? <Outlet/> : <Navigate to='/login'/>
     )
}


export default ProtectRoute