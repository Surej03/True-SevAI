import React from 'react'
import { stepsData } from '../assets/assets'
import {delay, motion} from "framer-motion"

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-32'
        initial = {{opacity:0.2, y:100}} 
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        >
        <h1 className={`text-3xl sm:text-4xl font-semibold mb-8 text-white dark:text-black`}>How it works</h1>
        <p className={`text-lg mb-8 text-white dark:text-gray-600 `}>Transform Words into Stunning Images</p>

    <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((items, index)=>(
            <div key={index} 
            className='flex items-center gap-4 p-5 px-8 bg-white/20 
            shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'>
                <img width={40} src={items.icon} alt=''/>
                <div>
                    <h2 className={`text-xl font-medium text-white dark:text-black`}>{items.title}</h2>
                    <p className={`text-white/70 dark:text-gray-500`}>{items.description}</p>
                </div>
            </div>
        ))}
    </div>
    </motion.div>
  )
}

export default Steps