import React, { useEffect, useState ,useRef} from 'react'
import Message from './Message'
import { collection, query,  onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../Authen/firebase';

export default function ChatBox() {
    const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth"})
  };

  useEffect(scrollToBottom, [messages])
   
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50),
            );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                  messages.push({...doc.data(), id: doc.id});
          
            });
          setMessages(messages);
          
        });
return ()=> unsubscribe;

    }, []);


    return (
        <div className="pb-74 pt-30  containerWrap">
            {messages.map(message => (
                <Message key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef}></div>
        </div>
    )
}
