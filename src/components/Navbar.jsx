import React, { useState } from 'react'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className=' h-[60px] z-10 bg-black text-white flex drop-shadow-lg'>

      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold Pr-4 sm-text-4xl cursor-pointer'>BrAnd</h1>
          <ul className='hidden lg:flex'>
            <li className='p-2 mx-2 cursor-pointer'>Home</li>
            <li className='p-2 mx-2 cursor-pointer'>About</li>
            <li className='p-2 mx-2 cursor-pointer'>Support</li>
            <li className='p-2 mx-2 cursor-pointer'>Platform</li>
            <li className='p-2 mx-2 cursor-pointer'>Pricing</li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <button className='border bg-zinc-200 border-blue-900 text-black hover:bg-black hover:text-white rounded-md w-[100px] h-10 mr-3'> Sign Up</button>
          <button className='border bg-blue-900 border-blue-900 text-white hover:bg-black hover:text-white rounded-md w-[100px] h-10'> Login</button>
        </div>
        <div className='sm:block lg:hidden' onClick={handleClick}>
          {!nav ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }

        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-black text-white w-full px-8 mt-14'}>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'>About</li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'>Support</li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'>Platform</li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className='my-4 flex flex-col'>
          <button className='border bg-zinc-200 border-blue-900 text-black hover:bg-black hover:text-white rounded-md  h-10 mr-3 mb-4'>Sign Up</button>
          <button className='border bg-blue-900 border-blue-900 text-white hover:bg-black hover:text-white rounded-md  h-10 mr-3'>Login</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar