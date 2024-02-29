import React from 'react'

// import Login from '../Authen/Login';
// import SignUp from '../Authen/SignUp';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
   
  return (
    <>
    <h1 className='text-3xl mx-auto text-center  text-indigo-900 font-bold'> Welcome to chat application.  </h1>
     <div className='Authentication  flex flex-col justify-center items-center min-h-screen'>
{/* <NavLink to ='/signup' className="my-4 mx-auto w-full max-w-64 btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg "> <i class="fa-solid fa-user-plus"></i> Sign Up </NavLink>

<NavLink to='/login' className=" mx-auto w-full max-w-64 btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg "><i class="fa-solid fa-right-to-bracket"></i> Login </NavLink> */}

<NavLink to ='/signup' className="my-4 mx-auto  btn-w-50  btn btn-primary  sm:btn-sm md:btn-md lg:btn-lg "> <i class="fa-solid fa-user-plus"></i> Sign Up </NavLink>

<NavLink to ='/login' className=" mx-auto btn btn-w-50 btn-accent  sm:btn-sm md:btn-md lg:btn-lg "><i class="fa-solid fa-right-to-bracket"></i> Login </NavLink>
</div>
    </>
  )
}
