import React from 'react'
import { assets } from '../assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
       <img src={`${isDarkMode ? assets.logo_dark : assets.logo}`} alt='' width={150}/>
       <p className={`flex-1 border-l border-gray-400 pl-4 text-sm  max-sm:hidden text-white dark:text-gray-500`}>Copyright @Surej | All right reserved.</p>

       <div className='flex gap-2.5 cursor-pointer'>
        <a href='https://www.facebook.com/profile.php?id=100013190179322' target='_blank'>
        <img src={assets.facebook_icon} alt='facebook icon' width={35}/></a>
        <a href="https://www.linkedin.com/in/surej-b-h-33216023a/" target='_blank'>
        <img src={assets.linkedin_icon} alt='linkedin icon' width={35}/></a>
        <a href='https://www.instagram.com/surej03?igsh=bTdkbWF0Mndpd2c5&utm_source=qr' target='_blank'>
        <img src={assets.instagram_icon} alt='instagram icon' width={35}/></a>
      
       </div>
    </div>

  )
}

export default Footer