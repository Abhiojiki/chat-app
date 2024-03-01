import { React, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './firebase';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import AfterLogin from '../Components/AfterLogin';





export default function SignUp() {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUsername, username } = UserAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    return /[0-9]/.test(password) && password.length >= 6;
  }

  const usernameValidate = (username) => {

    return username.length>0;
  }


const handleSubmit = async (event) => {
  event.preventDefault();
  
  
  if (!usernameValidate){
    setError('Invalid username. ');
    return ;
  }
 if (!validateEmail(email)) {
    setError('Invalid email. Please enter a valid email address.');
    return;
  }
  if (!validatePassword(password)) {
    setError('Invalid password. Password should be at least 8 characters and include a number.');
    return;
  }
 setUsername('');

    // console.log('Email: ', email);
  setError('');
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(userCredential);
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: username
    }).then(() => {



      console.log("Display name updated successfully:", user.displayName);
    }).catch((error) => {
      console.log("An error occured");
    });

    navigate('/');
  }
  catch (error) {
    if (error.code === "auth/email-already-in-use") {
      setError("This email is already registered. Try another email or login.");
    }
    console.log(error);
  }
};




return (
  <>
    {/* <UserContext.Provider value={{ username, setUsername }}>
      <AfterLogin/> */}
      <div className=" navbar bg-neutral-600 text-neutral-content">
  <div className='containerWrap '>
  <a className="btn btn-ghost normal-case text-[30px]">SimpleChat</a>
  </div>
</div>
    <div className="flex flex-col  items-center justify-center min-h-screen bg-blue-50 ">
      <div className='text-6xl text-black mb-5'>Sign Up</div>
      <form className="p-6 space-y-8 border rounded-lg border border-solid border-black" onSubmit={handleSubmit}>
        <div>
          <label className="block text-black">Username</label>
          <input
            className="w-full px-3 py-2 border border-solid border-black rounded-md bg-white text-black"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            required
          />
        </div>

        <div>
          <label className="block text-black">Email</label>
          <input
            className="w-full px-3 py-2 border border-solid border-black rounded-md bg-white text-black"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-black">Password</label>
          <input
            className="w-full px-3 py-2 border border-solid border-black rounded-md bg-white text-black mb-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-md text-red-500 mb-4">{error}</p>}
        <button className="w-full p-2 text-white bg-blue-600 rounded-md " type="submit">Submit </button>
        <p className="text-md whitespace-pre text text-black-600" style={{ color: "black" }}>Already have an account?   <NavLink to='/login' className='text-blue-600'>Login Now</NavLink></p>
      </form>
    </div>
    {/* </UserContext.Provider> */}
  </>
);

          }