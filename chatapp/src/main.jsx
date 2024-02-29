import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SignUp from './Authen/SignUp.jsx';
import HomePage from './Components/HomePage.jsx';
import {Protected} from './Components/Protected.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Login from './Authen/Login.jsx';
import AfterLogin from './Components/AfterLogin.jsx';
// import ChatBox from './Components/ChatBox.jsx';
import { AuthProvider } from './Authen/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />} >
 
      <Route path='home' element={<HomePage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='/' element={<Protected>
        <AfterLogin />
      </Protected>
      }/>
    
      </Route>



      )
      )



      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(


      <React.StrictMode>
         <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>

      );
