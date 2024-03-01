import React from 'react'
import { UserAuth } from '../Authen/AuthContext'

 const Message =({message}) =>{
    const {currentUser} = UserAuth();

    console.log(message)
  return (
  <>
           <div className={`chat ${message.uid === currentUser.uid ? 
           "chat-end" : "chat-start"} ` }>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="../images/user2.png" />
    </div>
  </div>
  <div className="chat-header">
   {message.name}
 
  </div>
  <div className="chat-bubble text-xl">{message.text}</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>

  </>
  )
}
export default Message