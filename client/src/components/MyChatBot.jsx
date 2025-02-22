import { Bot } from 'lucide-react'
import React from 'react'
import ChatBot from 'react-chatbotify'

const MyChatBot = () => {
  return (
        <ChatBot
        headerAvatar = {<Bot size={34}/>}
        />
  )
}

export default MyChatBot;