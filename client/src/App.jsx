import React, {useContext, useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from './pages/Homepage'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import TermsOfServices from './pages/TermsOfServices'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import Contact from './components/Contact';


const App = () => {
  const {showLogin} = useContext(AppContext);
  const[isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[]);

  useEffect(()=>{
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "";
    }
  }, [isDarkMode])


  return (
    <div className={`sm:px-10 md:px-14 lg:px-0 min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-lightTheme' : 'bg-darkTheme'}`}>
      <ToastContainer position='bottom-right'/>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      { showLogin && <Login/>}
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/text2image' element = {<Result/>}/>
        <Route path='/buycredits' element = {<BuyCredit/>}/>
        <Route path='/terms-of-service' element= {<TermsOfServices/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App