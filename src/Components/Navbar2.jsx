import React from 'react'
import { Link } from "react-router-dom"
import "./style.css"

const Navbar2 = () => {
  return (
    <div>
      <div className='w-full bg-cover bg-center bg-no-repeat'>
        <div className='flex w-[100%] justify-between p-5 text-white text-xl bg-[rgb(230,230,230)]'>
          <div className='text-red-500 text-2xl'>
            Memory-mapper
          </div>
          <div className='flex justify-between mr-10 hover:cursor-pointer'>
            <Link to='/Memory-Mapper'>
                <p className='px-6 text-black hover:underline hover:scale-110 duration-200'>Learn</p>
            </Link>
            
            <Link to='/visualise' >
            <p 
                className='px-6 text-black hover:underline hover:scale-110 duration-200'>
                Memory Allocation
            </p>
            </Link>

            <p className='px-6 text-black border-2 hover:underline hover:scale-110 duration-200 border-black rounded-2xl cursor-not-allowed opacity-75'>
              Github
            </p>
          </div>
        </div>

        <div className='text-black text-xl flex-col size-fit text-center mx-auto mt-8'>
            <p className='text-6xl font-semibold'>Memory Mapper</p>
            <p className='text-1xl mt-4'>
            "Efficiently managing memory allocation for process execution by <br />
            assigning memory blocks to processes within the system."
            </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
