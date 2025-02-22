import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import {delay, motion} from "framer-motion"
import { AppContext } from '../context/AppContext'


const Generatebtn = () => {
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = ()=>{
      if(user){
          navigate("/text2image")
      }else {
          setShowLogin(true)
      }
  }    
  return (
    <motion.div className='pb-16 text-center'
    initial = {{opacity:0.2, y:100}} 
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
        <h1 className={`text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-white py-6 md:py-16 dark:text-neutral-800`}>See the magic. Unleash your thoughts</h1>
        <motion.button onClick={onClickHandler}
        whileHover={{scale:1.08}}
        whileTap={{scale:1}}
        initial = {{opacity:0}} 
        animate={{opacity:1}}
        transition={{ default:{ duration:0.5 }, opacity:{ delay:0.8, duration:1 } }}
        className={`sm:text-lg text-white bg-black w-auto px-12 py-2.5 flex items-center gap-2 rounded-full cursor-pointer border border-white
        m-auto hover:scale-105 transition-all duration-500 dark:border-black`}>Generate Images
            <img src={assets.star_group} alt=''className='h-6'/>
        </motion.button>
    </motion.div>
  )
}

export default Generatebtn