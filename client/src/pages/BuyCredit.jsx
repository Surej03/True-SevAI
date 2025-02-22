import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'


const BuyCredit = ({isDarkMode}) => {
  const {user, backendUrl, setShowLogin, token, loadCreditBalance} = useContext(AppContext)
  const navigate = useNavigate();

// init payment
const initPayment = async (order)=> {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Surej pvt.ltd",
    description: "Test Transaction",
    order_id: order.id,
    receipt: order.receipt,
    handler: async (response)=> {
      try {
        
        const {data} = await axios.post(backendUrl+"/user/verifyrazorpay", response, {headers: {token}})

        if (data.success){
          loadCreditBalance();
          navigate("/")
          toast.success("Credits Added  ")
        }
      } catch (error) {
        toast.error(error.message)
      }
    } 
  }
  const rzp = new window.Razorpay(options)
  rzp.open() 
}

  const paymentRazorpay = async(planId)=> {
    try {
      if(!user){
        // if user is not available it will open the login form
        setShowLogin(true)
      }

     const response =  await axios.post(backendUrl + "/user/razorpay", {planId}, {headers: {token}})

     if (response.data){
      initPayment(response.data.order);
     }

    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
        initial = {{opacity:0.2, y:100}} 
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
    >
        <button className={`border border-gray-400 px-10 py-2 rounded-full mb-6 text-white dark:text-black`}>Our Plans</button>
        <h1 className={`text-center text-3xl font-medium mb-6 sm:mb-10 text-white dark:text-black`}>Choose the plan</h1>

        <div className='flex flex-wrap justify-center gap-6 text-left'>
          {plans.map((item, index)=> (
            <div key={index}
            className={`bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-black hover:text-white hover:scale-105 hover:bg-darHover transition-all duration-500 dark:hover:bg-white dark:text-gray-600`} >
              <img src={isDarkMode ?assets.sevicon_dark :assets.logo_icon} alt='' width={40}/>
              <p className={`mt-3 mb-1 font-semibold`}>{item.id}</p>
              <p className={`text-sm`}>{item.desc}</p>
              <p className='mt-6'>
                <span className='text-3xl font-medium'>₹{item.price} </span> /{item.credits} credits</p>
                <button onClick={()=>paymentRazorpay(item.id)} 
                className='w-full bg-gray-800 rounded-md py-2.5 text-white text-sm  mt-8 min-w-52 border border-white'>
                  {user ? 'Purchase' : 'Get Started'}</button>
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default BuyCredit