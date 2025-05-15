import React from 'react'

const Footer2 = () => {
  return (
    <div className='mb-5'>
        <hr />
        <div className='my-10 flex-col text-center'>
            <div className='flex m-10 w-fit p-3 mx-auto'>
                <p className='text-6xl font-light font-slabo'>TEAM - </p>
                <img width={220} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHNrqG9W2_bh7QIxUKbPIrWMNEqEp8X8q0g&s" alt="logo" />
            </div>
            <div className='bg-red-500 p-1'>
              <div className='flex justify-between m-10 text-xl font-light'>
                <a className='hover:scale-110 duration-300' href="https://anshuman-bhandari.github.io/Personal-Portfolio/"><p>Anshuman Bhandari</p></a>
                <a className='hover:scale-110 duration-300' href=""><p>Ashish Chaudhary</p></a>
                <a className='hover:scale-110 duration-300' href=""><p>Aditya Sharma</p></a>
                <a className='hover:scale-110 duration-300' href=""><p>Lalit Mohan Singh</p></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer2