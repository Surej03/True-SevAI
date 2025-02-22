import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Queries from '../components/Queries'
import Generatebtn from '../components/Generatebtn'
import ChatBot from '../components/chatBot/ChatBot'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Queries />
      <Generatebtn />
      <ChatBot />
    </div>
  )
}

export default Homepage