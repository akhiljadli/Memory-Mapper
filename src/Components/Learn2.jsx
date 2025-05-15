import React from 'react'

const Learn2 = () => {
  return (
    <div className='p-5 mt-10' id='learn-section'>
        <div className='flex-col'>
            <div className='flex m-10'>
                <div className='w-[60%] mt-10'>
                    <p className='text-3xl text-center text-red-600 font-light'>Contiguous Memory Allocation</p>
                    <br />
                    <p>
                    Contiguous memory allocation assigns a single continuous block of memory to a process or file, ensuring that free memory is not scattered but located in one place.
                    </p>
                    <br />
                    <p>
                        <ul>
                            <li>First Fit - Allocate the  irst available memory block that is large enough to ful ill the request.</li>
                            <li>Best Fit - Allocate the smallest available block that is large enough to minimize wasted space. </li>
                            <li>Worst Fit - Allocate the largest available block to reduce the chance of creating a small 
                            unusable fragment.</li>
                            <li>Next Fit - Similar to First Fit, but continues searching from the last allocated position to avoid 
                            clustering at the beginning. </li>
                        </ul>
                    </p>
                </div>
                <div className='w-[40%]'>
                    <img width={600} src="https://static.takeuforward.org/content/-hMawFssQ" alt="Memory" />
                </div>
            </div>
            <hr />
            <br />
            <div className='flex m-5'>
                <div className='mr-5 border-4 border-red-500 p-4'>
                    <img height={1100} width={1100} src="https://er.yuvayana.org/wp-content/uploads/sites/11/2020/04/Hardware-Support-Block-diagram-for-Paging-in-Operating-System.png" alt="Memory" />
                </div>
                <div className='ml-10'>
                <p className='text-3xl text-center text-red-600 font-light'>Non-Contiguous Memory Allocation</p>
                <br />
                    <p>
                    Non-contiguous allocation, also known as dynamic or linked allocation, is a memory allocation technique used in operating systems to allocate memory to processes that do not require a contiguous block of memory.
                    </p>
                    <br />
                    <p>
                        <ul>
                            <li>FCFS (First-Come, First-Served): Replaces the page that entered memory earliest, 
                            regardless of recent usage.</li>
                            <li>LRU (Least Recently Used): Replaces the page that hasn’t been used for the longest 
                            period of time. </li>
                            <li>Worst Fit - Allocate the largest available block to reduce the chance of creating a small 
                            unusable fragment.</li>
                            <li>MRU (Most Recently Used): Replaces the page that was accessed most recently. </li>
                            <li>LFU (Least Frequently Used): Replaces the page with the lowest access frequency, assuming it's least likely to be used again soon.</li>
                            
                        </ul>
                    </p>
                </div>
            </div>
            <hr />
            <br />
            <div className='flex m-10'>
                <div className='w-60% mr-5'>
                <p className='text-3xl text-center text-red-600 font-light'>Buddy System</p> <br />
                    <p>
                    Buddy System is a memory allocation technique used in computer OS to allocate and manage memory efficiently. This technique by dividing the memory into fixed-size blocks, and whenever a process requests memory, the system finds the smallest available block that can accommodate the requested memory size.
                    </p>
                    <br />
                    <p>
                        <ul>
                            <li>Fibonacci Buddy System : A Fibonacci buddy system has block sizes of 16, 32, 48, 80, 128, and 208 bytes</li>
                            <li>Binary Buddy System : The buddy system keeps track of the free blocks of each size (known as a free list) so that you can easily discover a block of the necessary size if one is available.</li>
                            <li>Worst Fit - Allocate the largest available block to reduce the chance of creating a small 
                            unusable fragment.</li>
                            <li>Weighted Buddy System: In a weighted peer system, each memory block is associated with a weight, which represents its size relative to other blocks. </li>
                        </ul>
                    </p>
                </div>
                <div className='border-4 border-red-500 p-4'>
                    <img height={1200} width={1200} src="https://images.tpointtech.com/operating-system/images/what-is-buddy-system.png" alt="Memory" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learn2