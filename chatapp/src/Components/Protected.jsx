// import React from 'react'
// import { Navigate,Outlet } from 'react-router'

// export default function Protected() {
//     const  token = localStorage.getItem('token');
//     console.log('hello this is protected');
//   return ( 
//     token? <Outlet/> : <Navigate to='/login'/>

//   )
// }
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Authen/AuthContext";
export const Protected = ({ children }) => {
  const { currentUser } = UserAuth();

  if(!currentUser) {
    return <Navigate to="/" replace={true}  />
  }
  return children;
}