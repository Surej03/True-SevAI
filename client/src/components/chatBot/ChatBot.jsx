import React, { useContext, useEffect, useState } from "react";
import { Bot, Minus, Smile, X} from "lucide-react";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import ChatWindow from "./ChatWindow";

const ChatBot = () => {
  const { user } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const toggle_mode = () => {
    if (!isOpen){
      const audio = new Audio(assets.aiSound);
      audio.play();
    }
  };

  // close chatbot if user is not available
  useEffect(()=>{
    if (!user){
      setIsOpen(false);
      setMessages([]); //reset the messages when user logs out
      if(!isFirstOpen){
        setIsFirstOpen(false)
      };
    }
  },[user])

  // Load chat history only when the user is available 
  useEffect(()=>{
    if(user){
    const savedMessages = JSON.parse(localStorage.getItem(`chatHistory_${user.name}`)) || [];
    setMessages(savedMessages);
    } 
  },[user]);


  // Save chat history in local storage when messages update
  useEffect(()=>{
    if ( user && messages.length>0){
      localStorage.setItem(`chatHistory_${user.name}`, JSON.stringify(messages));
    }
  },[messages, user]);

  //clear chat
  const clearChat = ()=>{
    setMessages([]);
    if(user){
    localStorage.removeItem(`chatHistory_${user.name}`);
    }
  };

  if (!user) return null;
  
  return (
    <div className="fixed bottom-16 right-6 cursor-pointer">
      <motion.button
        whileHover={{ scale: 1.3, rotate: 720 }}
        whileTap={{ scale: 0.9 }}
        onClick={()=>{toggle_mode(); setIsOpen(true); setHasTyped(false);}}
        className="bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all" >
        <Bot className="text-white" size={34} strokeWidth={2} />
        </motion.button>
        {isOpen && (
        <div className="fixed bottom-16 right-6 w-80   bg-white border shadow-lg rounded-lg">
          <div className="flex justify-between items-center p-2  bg-blue-600 text-white">
            <h1 className="flex gap-2">Chat with me!<Smile size={22}/></h1>
            
            {/* -----------------Close Icon----------------- */}
            <div className="flex gap-2 ">
            <button className="hover:bg-blue-950 hover:bg-opacity-20 hover:rounded-full" onClick={()=>{setIsOpen(false)}} title="Minimize"><Minus/></button>
            <button className="hover:bg-blue-950 hover:bg-opacity-20 hover:rounded-full" title="Close" onClick={() =>{setIsOpen(false); clearChat();}}><X size={20}/></button>
            </div>
          </div>
          <ChatWindow messages={messages} setMessages={setMessages} onUserType={() => {setHasTyped(true); setIsFirstOpen(false)}}/>
        </div>
      )}
      {isOpen && isFirstOpen && !hasTyped  && (
      <h3 className="relative bottom-56 -left-20 gap-2 text-blue-900 font-serif font-[800] cursor-text">Hello, {user.name} 👋</h3>
    )}
    </div>
  );
};

export default ChatBot;