import React from 'react'
import { assets } from '../assets/assets'
import {delay, motion} from "framer-motion"


const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
        initial = {{opacity:0.2, y:100}} 
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        >  
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'> 
            Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your thoughts into Visuals</p>
    
        {/* //flex-row side by side */}
    <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img className='w-80 xl:w-96 rounded-lg'
        src={assets.sample_img_1} alt='sample_image'/>

        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4 cursor-pointer hover:text-blue-500'>Type It to Life: Meet the AI Text-to-Image Creator</h2>
            <p className='text-gray-600 mb-4 cursor-pointer hover:text-indigo-900'>Transform your imagination into stunning visuals with our AI-powered text-to-image generator. 
                Simply describe your vision in words, and watch as the AI brings it to life, delivering vibrant, high-quality 
                images in seconds. Whether you're an artist, designer, or simply exploring creative ideas, this tool provides 
                endless possibilities for inspiration and innovation. Perfect for personal projects, professional design, or 
                just for fun—experience the future of creativity today!</p>
                <p className='text-gray-600 mb-4 cursor-pointer hover:text-indigo-900'>Unleash your creativity! Type your idea or vision into the text box, and let the AI bring it to life as a 
                    stunning image. Your imagination is the only limit—start exploring now!</p>
        </div>
    </div>
    </motion.div>
  )
}

export default Description