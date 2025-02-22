import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from "framer-motion"
import axios from "axios";
import { toast } from 'react-toastify';

const Login = () => {
  const [ishavingaccount, setIsHavingAccount] = useState('Login')
  const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)

  //storing name, email, password in state variable
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Regex patterns for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#]{8,}$/;

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email format");
    }
    if (!passwordRegex.test(password)) {
      return toast.error("Password must be at least 8 characters long and include at least one letter and one number");
    }

    try {
      if (ishavingaccount === "Login") {
        const response = await axios.post(backendUrl + "/user/login", { email, password });

        if (response.data) {
          setToken(response.data.token);
          setUser(response.data.user);
          localStorage.setItem('token', response.data.token);
          setShowLogin(false);
        } else {
          toast.error(response.data.message);
        }
      } else {
        if (!name.trim()) {
          return toast.error("Name is required for registration");
        }

        const response = await axios.post(backendUrl + "/user/register", { name, email, password });

        if (response.data) {
          setToken(response.data.token);
          setUser(response.data.user);
          localStorage.setItem('token', response.data.token);
          console.log("Welcome to True SevAI");
          setShowLogin(false);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const handleKeyDown = (e) =>{
    if (e.key === "Enter"){
      onSubmitHandler();
    }
  }
  

  useEffect(()=> {
    document.body.style.overflow = 'hidden';

    return ()=> {
      document.body.style.overflow = 'unset';
    }

  },[])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop:blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'
      initial = {{opacity:0.2, y:50}} 
      transition={{duration:0.3}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{ishavingaccount}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>

       { ishavingaccount !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'> 
          <img src={assets.profile_icon} alt='' width={25}/>
          <input className='outline-none text-sm'
          onChange={e => setName(e.target.value)} value={name}
           type='text' placeholder='Full Name' required/>
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'> 
          <img src={assets.email_icon} alt=''/>
          <input className='outline-none text-sm'
          onChange={e => setEmail(e.target.value)} value={email}
           type='email' placeholder='Email id' required onKeyDown={handleKeyDown}/>
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'> 
          <img src={assets.lock_icon} alt=''/>
          <input className='outline-none text-sm'
          onChange={e => setPassword(e.target.value)} value={password}
           type='password' placeholder='Password' required onKeyDown={handleKeyDown}/>
        </div>
        <div
  className={`mt-4 ${ishavingaccount === 'Login' ? 'mb-0' : 'mb-4'}`}>
  {ishavingaccount === 'Login' && (
    <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password</p>)}
</div>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{ishavingaccount ==='Login' ? 'login' : 'create account'}</button>
        {/* For new user it will display*/}
{ishavingaccount === "Login" ?
        <p className='text-center mt-5'>Don't have an account?
           <span className='cursor-pointer hover:text-blue-600' onClick={()=>setIsHavingAccount('Sign Up')}> Sign Up</span></p>



:
// For existing user it will display
        <p className='text-center mt-5'>Already have an account?
          <span className='cursor-pointer hover:text-blue-600' onClick={()=>setIsHavingAccount('Login')}> Login</span></p>
}
      <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt=''
      className='absolute top-5 right-5 cursor-pointer '/>
      </motion.form>
    </div>
  )
}

export default Login