import { createContext, useEffect, useState,useContext } from 'react';
import { auth } from './firebase';import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext("");

export const AuthProvider = ({children}) =>
{
    const [currentUser, setCurrentUser]= useState(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername]= useState("");


const value ={
    currentUser,
    setCurrentUser,
username,
setUsername
}

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user);
        setLoading(false);
    });
    return unsubscribe;
},[]);

return (
    <AuthContext.Provider value ={value}>
        {!loading && children}
    </AuthContext.Provider>
)
}

export const UserAuth = () =>{
    return useContext(AuthContext);
}