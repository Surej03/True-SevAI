import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Contact, LogOut, Upload } from 'lucide-react'
import { motion } from "framer-motion";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const {user, setShowLogin, logout, credit} = useContext(AppContext)
    const navigate = useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Load profile image from localStorage or use default image
    const [profileImage, setProfileImage] = useState(
        localStorage.getItem("profileImage") || assets.profile_icon
    );
    
    useEffect(()=>{
            const storedImage = localStorage.getItem("profileImage")
        if(storedImage){
            setProfileImage(storedImage)
        }
    },[]); 

    //handling the profile image
    const handleProfileImageChange = (e) =>{
        const file  = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
            const base64String = reader.result; // convert to base64String;
            setProfileImage(base64String);
            localStorage.setItem("profileImage", base64String);
            }
            reader.readAsDataURL(file) // read file as data url(base64String)
        }
    };

    //dropdown button 
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev)
    };

    useEffect(()=> {
        const handleClickOutside= (e) => {
            if (!e.target.closest(".profile-dropdown")){
                setIsDropdownOpen(false)
            }
        };
        document.addEventListener("click", handleClickOutside);
        return()=> {
            document.removeEventListener("click", handleClickOutside)
        }; 
    },[]);


  return (
    <div className={`flex items-center justify-between py-6 px-8 transition-all duration-0.5 ${isDarkMode ? 'bg-cyan-50':'bg-darkTheme'}`}>
        <Link to={'/'}>
        <img src={isDarkMode ? assets.logo: assets.logo_dark} alt='' className='w-28 sm:w-32 lg:w-40 mx-4'/>
        </Link>

    <div>
        {
        user ? // ? if user is logged in 
       <div className='flex items-center gap-2 sm:gap-3 mx-6 relative'>
    {/* Credits Button */}
    <button 
        onClick={()=>navigate('/buycredits')} 
        className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 
        rounded-full hover:scale-105 transition-all duration-700'
    >
        <img className='w-5' src={assets.credit_star} alt=''/>
        <p className='text-xs sm:text-sm font-medium text-gray-600'>
            Credits left: {credit}
        </p>
    </button>

    {/* User Name */}
    <p className={`max-sm:hidden pl-4 ${isDarkMode ? 'text-gray-600' : 'text-white'}`}>
        Hi, {user.name}
    </p>

    {/* Profile Image and Dropdown */}
    <div className='relative profile-dropdown'>
        <img className='w-10 h-10 rounded-full drop-shadow cursor-pointer' src={profileImage} alt='profile' onClick={toggleDropdown}/>
        
        {/* Dropdown Menu */}
        {isDropdownOpen && (
        <div className='absolute top-12 right-0 w-44 bg-white shadow-lg rounded-md border'>
            <ul className='list-none text-sm'>
                {/* Upload Image */}
                <li className='flex items-center gap-2 py-2 px-4 cursor-pointer hover:bg-gray-100'>
                    <label className='flex items-center gap-2 cursor-pointer w-full'>
                        <Upload size={16} />
                        <span>Set Profile Image</span>
                        <input type="file" accept='image/*' className='hidden' onChange={handleProfileImageChange}/>
                    </label>
                </li> 
                {/* Contact */}
                <li>
                    <Link to="/contact" className='flex items-center gap-2 py-2 px-4 cursor-pointer hover:bg-gray-100' onClick={() => setIsDropdownOpen(false)}>
                        <Contact size={16}/> Contact
                    </Link>
                </li>
                {/* Logout */}
                <li onClick={logout} className='flex items-center gap-2 py-2 px-4 cursor-pointer hover:bg-gray-100'>
                    <LogOut size={16}/> Logout
                </li>
            </ul>
        </div>
        )}
    </div>

    {/* Dark Mode Toggle */}
    <button 
        onClick={() => setIsDarkMode(prev => !prev)}
        title={`Switch between dark mode and light mode (currently ${isDarkMode ?'light' :'dark'} mode)`}
        className="flex items-center justify-center p-2 hover:bg-gray-500 rounded-full ml-2 relative overflow-hidden w-10 h-10 dark:hover:bg-gray-200"
    >
        <motion.img
        key={isDarkMode}
        initial = {{y: -20, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        transition={{duration: 0.3, ease: "easeOut"}}
        className='w-7 absolute' src={isDarkMode ? assets.light_icon : assets.dark_icon} alt=''/>
    </button>
</div>

        : // : else condition
        <div className='flex items-center gap-2 sm:gap-5'> 
            <p onClick={()=>navigate('/buycredits')} 
            className={`cursor-pointer text-white dark:text-black`}>Pricing</p>
            <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
        </div>
        }
    </div>

    </div>
  )
}
export default Navbar