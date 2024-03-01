import { signOut } from 'firebase/auth';

import { auth, db } from '../Authen/firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router';

import { UserAuth } from '../Authen/AuthContext';
import { getFirestore, where, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect, useContext } from 'react';
import ChatBox from './ChatBox';





export default function AfterLogin() {

    const [messages, setMessages] = useState([])

    const [newMessage, setNewValue] = useState("")


    const [value, setValue] = useState("");
    const { currentUser } = UserAuth();


    const sendMessage = async (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            alert("Enter valid message!")
            return;
        }
        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        }
        catch (error) {
            console.log(error);
        }

        setNewValue("");
    }


    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        <>

            {currentUser ? (
<>

                <div className="navbar  fixed z-10 bg-neutral-600 text-neutral-content">
                    <div className="containerWrap flex justify-between">
                        <div className="flex items-center">
                            <div className="avatar flex-none rounded-full">
                                <div className="w-16 rounded-full ">
                                    <img className='rounded-full' src="../public/images/user2.png" />
                                </div>
                            </div>
                            <div className="btn flex-none btn-ghost normal-case text-4xl">SimpleChat</div>
                            <p className='text-2xl'>{currentUser.displayName}</p>
                        </div>

                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1"><FontAwesomeIcon icon={faBars} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-52">
                                <li><a onClick={handleLogout}>Logout</a></li>
                                <li><a>Download chats</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
               
               <ChatBox/>
               <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={sendMessage} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none text-xl" type="text" />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>


                </>
            ) :
                navigate('/login')
            }


            {/* {currentUser ? (
                   <div className="container Wrap">
                        <ChatBox />

                    </div>



                    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
                        <form onSubmit={sendMessage} className="px-2 containerWrap flex">
                            <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
                            <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
                        </form>
                    </div>
                
            ) :

                navigate('/login')

            } */}

        </>

    )
}
