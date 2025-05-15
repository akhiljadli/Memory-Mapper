import React from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
import "./style.css"

const Navbar2 = () => {
  return (
    <div>
      <motion.div 
        className='w-full h-screen bg-cover bg-center bg-no-repeat' 
        id='home'
        initial={{ height: screen}}
        animate={{ height: 0}}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
      >

        <motion.div
          className='flex w-[100%] justify-between p-5 text-white text-xl'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, backgroundColor: 'rgb(230, 230, 230)'}}
          transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
        >
          <div className='text-red-500 text-2xl'>
            TEAM - ELITE
          </div>
          <div className='flex justify-between mr-10 hover:cursor-pointer'>
            <Link to='/'>
                <p className='px-6 text-black hover:underline hover:scale-110 duration-200'>Learn</p>
            </Link>
            

            <Link to='/visualise' >
            <p 
                className='px-6 text-black hover:underline hover:scale-110 duration-200'>
                Memory Allocation
            </p>
            </Link>
            
            <Link to='/pageReplacement'>
            <p className='px-6 text-black hover:underline hover:scale-110 duration-200'>Page Replacement</p>
            </Link>

            <p className='px-6 text-black border-2 hover:underline hover:scale-110 duration-200 border-black rounded-2xl'>
              <a href="https://github.com/Anshuman-Bhandari/Memory-Mapper.git">Github</a>
            </p>
          </div>
        </motion.div>

        <motion.div
            className='text-white text-xl flex-col size-fit text-center mx-auto mt-[15%]'
            initial={{ scale: 4.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <p className='text-6xl font-semibold'>Memory Mapper</p>
            <p className='text-1xl'>
            "Efficiently managing memory allocation for process execution by <br />
            assigning memory blocks to processes within the system."
            </p>
                
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Navbar2
