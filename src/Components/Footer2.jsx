import React from 'react'

const Footer2 = () => {
  return (
    <div className='mb-5'>
        <hr />
        <div className='my-10 flex-col text-center'>
            <div className='m-10 w-fit p-3 mx-auto'>
                <p className='text-6xl font-light font-slabo'>Memory-mapper</p>
            </div>
            <div className='bg-red-500 p-3 shadow-lg'>
              <div className='flex justify-between m-8 text-2xl font-semibold text-white'>
                <a className='hover:scale-110 duration-300 hover:text-gray-200' href="#"><p>Ritik Butola</p></a>
                <a className='hover:scale-110 duration-300 hover:text-gray-200' href="#"><p>Akhil Jadli</p></a>
                <a className='hover:scale-110 duration-300 hover:text-gray-200' href="#"><p>Anuj Bhardwaj</p></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer2