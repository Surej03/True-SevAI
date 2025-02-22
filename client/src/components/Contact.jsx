import { assets } from '../assets/assets'
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { motion } from "motion/react";


const Contact = ({isDarkMode}) => {

    const Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (event) => {
    event.preventDefault();

    const loadingToast = toast.loading("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "13ffabff-ddb4-44e7-8937-14b6018d9412");


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        const audio = new Audio(assets.message_send);
        audio.play();
        toast.update(loadingToast, {
          render: "Form Submitted Successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeButton: true
        });
        event.target.reset();
      } else {
        toast.update(loadingToast, {
          render: data.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
          closeButton: true
        });
      }
    } catch {
      toast.update(loadingToast, {
        render: "Something went wrong! Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'bg-darkTheme text-white' : 'bg-footer-bg text-black'} bg-no-repeat bg-center bg-[length:90%_auto]`}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg text-white dark:text-black'
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl text-white dark:text-black'
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-white dark:text-black'
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'
      >
        <div className='flex gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text" placeholder='Enter your name' required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? 'bg-gray-700 border-white text-white' : 'bg-white border-gray-400'}`} name='name'
          />

          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email" placeholder='Enter your email' required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? 'bg-gray-700 border-white text-white' : 'bg-white border-gray-400'}`} name={`email`}
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows={6} placeholder='Enter your message' required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${isDarkMode ? 'bg-gray-700 border-white text-white' : 'bg-white border-gray-400'}`} name='message'
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type='submit'
          className= 'py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto border border-white text-white bg-black dark:text-white hover:bg-blue-950 dark:bg-black dark:hover:bg-gray-800 dark:border-black'
        >
          Submit now <img src={assets.right_arrow} alt='right arrow' className='w-4' />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;