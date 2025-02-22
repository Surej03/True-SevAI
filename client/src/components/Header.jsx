import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { AppContext } from '../context/AppContext'

const Header = () => {

    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = ()=>{        if(user){
            navigate("/text2image")
        }else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-20'
        // initial opacity is 0.2 it will move in y axis
        initial = {{opacity:0.2, y:100}} 
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        >
            {/* Header */}
            <motion.div className=' text-white inline-flex text-center gap-2 bg-black px-6 py-1 rounded-full border border-white  dark:border-neutral-500 dark:bg-white dark:text-stone-500 '
            initial = {{opacity:0, y:-20}} 
            animate={{opacity:1, y:0}}
            transition={{delay:0.2, duration:0.8}}
            >
                <p>Type something to generate image</p>
                <img src={assets.star_icon} alt='' />
            </motion.div>

            {/* Header2 */}
        <motion.h1
         className={`text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center text-white dark:text-black`}>
        Turn text to{" "}
         <motion.span
        initial = {{opacity:0}} 
        animate={{opacity:1}}
        transition={{delay:0.4, duration:2}}
         className='text-blue-600'>image
         </motion.span>, in seconds.
       </motion.h1>

            <motion.p className={`text-center max-w-xl mx-auto mt-4 text-white dark:text-black`}
            initial = {{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            transition={{delay:0.6, duration:0.8}}
            >Unleash your creativity with AI. Turn your imagination into visual art
                in seconds. - just type, and watch the magic.</motion.p>
            
                <motion.button onClick={onClickHandler} className={`sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full cursor-pointer border border-white dark:border-gray-700`}
                whileHover={{scale:1.08}}
                whileTap={{scale:1}}
                initial = {{opacity:0}} 
                animate={{opacity:1}}
                transition={{ default:{ duration:0.5 }, opacity:{ delay:0.8, duration:1 } }}
                >Generate Images
                    <img className='h-6' src={assets.star_group} alt='' />
                </motion.button>
          
            {/* sample images */}
            <motion.div 
            initial = {{opacity:0}} 
            animate={{opacity:1}}
            transition={{delay:1, duration:1}}
             className='flex flex-wrap justify-center mt-10 gap-3'>
                {Array(6).fill('').map((item, index) => (
                    <motion.img 
                    whileHover={{scale:1.10, duration : 0.1}}
                    className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                        src={index % 2 !== 0 ? assets.sample_img_1 : assets.sample_img_2} alt='' key={index} width={70} />
                ))}
            </motion.div>
            <motion.p 
            initial = {{opacity:0}} 
            animate={{opacity:1}}
            transition={{delay:1.2, duration:0.8}}
            className={`mt-2 text-white dark:text-neutral-600`}>Generated images from True sevAI</motion.p>
        </motion.div>
    )
}

export default Header