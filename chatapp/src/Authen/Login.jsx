import {React,useEffect,useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

import {  GoogleAuthProvider, signInWithEmailAndPassword,signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { UserAuth } from './AuthContext';

export default function Login() {
  console.log('log in');
    
  const provider = new GoogleAuthProvider();
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser, signinWithGoogle } = UserAuth();


  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // You can now do something with the Google token and user information.
      // For example, save the token in localStorage and navigate to the home page.
      // localStorage.setItem('token', token);
      // localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      // Handle Errors here.
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

     try{
    const userCredential= await signInWithEmailAndPassword(auth, email, password);
    // console.log(userCredential);
    // const user = userCredential.user;
    // localStorage.setItem('token', user.accessToken);
    // localStorage.setItem('user', JSON.stringify(user));
  navigate('/');
  }
  catch(error){
    console.log(error);
  }
}

  return (
    <>
  

      <div className="flex flex-col  items-center justify-center min-h-screen bg-blue-50">
        <div className='text-6xl text-black mb-5 '>LogIn</div>
        <form className="p-6 space-y-8 border rounded-lg border border-solid border-black min-w-3555"  onSubmit={handleSubmit}>
        
      
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
            className="w-full px-3 py-2 border border-solid border-black rounded-md bg-white text-black" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        {/* {error && <p className="text-xs text-red-500">{error}</p>} */}
        <button className="w-full p-2 text-white bg-red-600 rounded-md" type="submit" >Submit</button>
        <button  onClick={signInWithGoogle}  className="btn w-full p-2 text-white bg-blue-600 rounded-md">
        <FontAwesomeIcon icon={faGoogle} size="lg" />
    Continue with Google
</button>
        <p className="text-md whitespace-pre text text-black-600" style={{color: "black"}}>Don't have an account?   <NavLink to='/signup' className='text-blue-600'>SignUp </NavLink></p>
      </form>
    </div>
    </>
  )
}
