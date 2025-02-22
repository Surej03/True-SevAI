import { SendHorizonal, User} from 'lucide-react';
import React, {useContext, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import './chatBot.css'
import rehypeRaw from "rehype-raw";
import { AppContext } from '../../context/AppContext';


const responses = {
  greetings :["hello", "hi", "hola", "hey", "greetings", "good morning", "good afternoon", "good evening"],
  greetings2 : ["hi how are you", "hello how are you", "how are you?", "how are you", "how are you doing?", "how are you doing", "what's up"],
  greetings3: ["bye", "see you later"],
  about: ["who are you", "what is your name", "tell me about yourself"],
  question1 : ["what's this page","what is this page", "what is this page?", "tell me about this page", "yes what is this page", "yes can you tell me about this page "],
  question2 : ["what about subscription","subscription","plan details", "subscription plan"],
  question3 : ["is it free"],
  question4: ["what is true sevai?", "what's True SevAI", "what's true sevai?", "what is true sevai"],
  question5: ["how to buy credits?","how to buy credits","how can i buy credits?","how can i buy credits", "how to buy credit?", "how to buy credit", "how can i get the credits", "how can i get the credits", "how can i get the credit"],
  question6: ["how to generate images?", "how to generate images", "how to generate image?", "how to generate image","how can i generate image", "how to generate the image", "how can i generate the image"],
  question7: ["can you suggest me any course?", "i need online courses", "i need online course", "online courses", "online course", "ok can you suggest me any course", "can you recommend me any course" ,"suggest me a course", "recommend me a course"],
  question8: ["what are you doing"],
  help: ["help", "how can you assist me", "what can you do", "what do you do"],
  jokes: ["tell me a joke", "so tell me a joke", "make me laugh","comedy", "funny"],
  jokes2: ["tell me an another joke", "tell me other joke", "anyother joke","another joke"],
  statement : ["i love you", "i am in love with you", "i am loving you "],
}

const botReplies = {
  greetings : "Hello! welcome to chatbot",
  greetings2 : "I'm doing great, thanks for asking! Would you like to asking anything?",
  greetings3: "Bye! see you 😊",
  about: "I'm SuperBot aka SuperBoy, your virtual assistant.I can answer your questions, tell jokes, and assist you with general information about this page. How can I help you?",
  help: "I can answer your questions, tell jokes, and assist you with general information about our page.",
  question1: "In this page you can generate images and download it by simply typing in the prompt field",
  question2 : "Initially you'll get 5 credits. Once its done you need to buy credis",
  question3 : `No not at all. Initially you'll get 5 credits. Once its done you need to buy credits.[Click here](/buycredits) to buy credits`,
  question4 : "True SevAI combines the meaning of 'True' as real and 'Sevai,' which means service in Tamil. If you look closely, 'SevAI' also suggests the idea of serving AI, making the name a perfect blend of authenticity and innovation.",
  question5 : `[Click here](/buycredits) to buy credits`,
  question6: `By simply typing in the prompt field you can generate image. To generate image [Click here](/text2image)`,
  question7: `To upskill yourself, I highly recommend the TopGrep e-learning platform! 🚀 You can learn JavaScript, Python, Java, databases, and much more.\nFor more details, [Click here](https://portal.topgrep.com/).🎯`,
  question8: "Just hanging out here, ready to help! What’s up? 😊",
  jokes: "Why don’t skeletons fight each other? Because they don’t have the guts! 😆",
  jokes2: "Do you know why we get cold? Because we have ice(eyes) above our nose! 😆",
  statement: "I am a chatBot. I do not possess emotions, but I acknowledge your statement. How may I assist you?"
}

const getResponse = (userInput) =>{
const lowerInput = userInput.toLowerCase().trim();


    // Check for exact matches first
  for (const [key, values] of Object.entries(responses)) {
    if (values.includes(lowerInput)){
      return botReplies[key];
    }
  }

  for (const [key, values] of Object.entries(responses)) {
    if (values.some((value)=> lowerInput.includes(value.toLowerCase()))){
      return botReplies[key];
    }
  }
  return "I'm not sure how to respond to that. Can you ask something else?";
}

const ChatWindow = ({messages, setMessages, onUserType}) => {
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const {user} = useContext(AppContext)

    const sendMessage = async ()=>{
        if (input.trim() !== ""){
            const newMessage = {text: input, sender: "user"};
            setMessages([...messages, newMessage]);
            // clear the input field
            setInput("");
        }
      // when a user sends a message(send message function is called and setistyping is set to true)
      setIsTyping(true);

        setTimeout(()=>{
        const botResponse = getResponse(input);
        setMessages((prev)=>[...prev,{text: botResponse , sender: "bot"},]);
        setIsTyping(false);
        },2000)
        onUserType();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && input.trim()!=='') {
        e.preventDefault()
        sendMessage();
      }
    };

    const handleClear = (input) =>{
      if (input.toLowerCase() === "/"){
        setMessages([]);
        
      }
    }


  return (
    <div className='flex flex-col h-96 w-80 rounded-lg p-4  bg-white shadow-lg'>
        <div className='flex-1 overflow-y-auto p-2 space-y-2'>
            {messages.map((msg, index)=> (
              <div key={index} className ={`p-2 rounded-full ${
                msg.sender == "user" ?"bg-blue-500 pr-6  text-white self-end overflow-wrap break-word" : " text-black self-start break-word"
              }`}>
                {msg.sender =="bot" ? 
                <ReactMarkdown
                components={{
                  a: ({node, ...props}) =><a className="text-blue-600 font-semibold hover:underline" {...props} target="_blank" rel="noopener noreferrer"/>
                }}
                >{msg.text}</ReactMarkdown>
                : msg.text
                }
              </div>
            ))}

            {/* Typing Indicator (Spinner) */}

            {isTyping && (
              <div className='typing-indicator'>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
        </div>
        {/* Input-Box */}
        <div className='flex items-center border px-0 py-0'>
          <input
          type='text'
          value={input}
          onChange={(e) => {setInput(e.target.value); handleClear(e.target.value)}}
          onKeyDown={handleKeyDown}
          className='flex-1 border-none outline-none'
          required
          placeholder='Ask here...'
          
          />
          <button onClick={sendMessage}
          className={`bg-blue-600 text-white px-4 py-1.5 ${input.trim() !=='' ?'' :'cursor-not-allowed opacity-50'}`} 
          title='Send message'
          disabled={input.trim() ===''}>
          <SendHorizonal size={20}/>
          </button>
        </div>
    </div>
  )
}

export default ChatWindow;