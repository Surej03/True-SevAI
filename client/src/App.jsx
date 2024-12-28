import React, {useContext} from 'react'
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

const App = () => {
  const {showLogin} = useContext(AppContext);

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      { showLogin && <Login/>}
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/text2image' element = {<Result/>}/>
        <Route path='/buycredits' element = {<BuyCredit/>}/>
        <Route path='/terms-of-service' element= {<TermsOfServices/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App