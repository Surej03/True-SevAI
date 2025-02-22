import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {delay, motion} from "framer-motion"
import { AppContext } from '../context/AppContext'


const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isimagegenerated, SetIsImageGenerated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputfielddata, setInputFieldData] = useState('')
  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent form reload
    setLoading(true);
  
    if (inputfielddata) {
      try {
        const image = await generateImage(inputfielddata); // Pass the prompt
        if (image) {
          SetIsImageGenerated(true);
          setImage(image);
        }
      } catch (error) {
        console.error("Error generating image:", error);
      }
    } else {
      console.warn("Input field data is empty!");
    }
  
    setLoading(false);
  };
  

  return (
    <motion.form onSubmit={onSubmitHandler} className='flex flex-col justify-center items-center min-h-[90vh]'
    initial = {{opacity:0.2, y:100}} 
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>
    <div>
        <div className='relative'>
          <img src={image} alt='' 
          className='max-w-sm rounded'/>
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]': 'w-0'}`}/>
        </div>
        <p className= {!loading ? 'hidden' : ""}>Loading.....</p>
    </div>
    {/* State function helps to switch state eg: if img is not generated it will display the input field. If it's generated it displays download
    Statefunction has to be called within the parenthesis*/}
    {! isimagegenerated &&
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
      <input onChange={e =>setInputFieldData(e.target.value) } value={inputfielddata}
       type='text' placeholder='Describe what you want to see' 
      className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-slate-200'/>
      <button type='submit' className={`bg-zinc-900 px-10 py-3 sm:px-16 rounded-full border border-white dark:border-black`}>
        Generate 
      </button>
    </div>
}

{isimagegenerated &&
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      {/* click btn ft. is working */}
      <p onClick={()=>{
        SetIsImageGenerated(false)
        setInputFieldData(''); // Clear input field
        setImage(assets.sample_img_1); // Reset image to default
        }} className='bg-transparent border border-border-white text-white dark:text-black dark:border-zinc-900 px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
      <a href={image} download className='bg-zinc-900 px-10 py-3 border border-white rounded-full cursor-pointer dark:border-zinc-900'>Download</a>
    </div>
}
    </motion.form>
  )
}

export default Result