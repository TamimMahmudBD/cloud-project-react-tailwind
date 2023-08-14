import React, { useState } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const indefinite = () => scroll
  const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[60px] z-10 bg-[#1E3A8A] text-white fixed drop-shadow-lg'>

      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold pl-4 sm-text-4xl cursor-pointer'>CLOUD.</h1>
          <ul className='hidden lg:flex pl-4'>
          <li className='p-2 mx-2 '><Link to="Home" className='cursor-pointer' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li className='p-2 mx-2 '><Link to="About" className='cursor-pointer' smooth={true} offset={50} duration={500}>About</Link></li>
          <li className='p-2 mx-2 '><Link to="Support" className='cursor-pointer' smooth={true} offset={50} duration={500}>Support</Link></li>
          <li className='p-2 mx-2 '><Link to="Platfrom" className='cursor-pointer' smooth={true} offset={-70} duration={500}>Platfrom</Link></li>
          <li className='p-2 mx-2 '><Link to="Pricing" className='cursor-pointer' smooth={true} offset={50} duration={500}>Pricing</Link></li>
          <li className='p-2 mx-2 '><Link to="Blog" className='cursor-pointer' smooth={true} offset={-70} duration={500}>Blog</Link></li>
          </ul>
        </div>
        <div className='hidden lg:block pr-4'>
          <button className='border bg-zinc-200 border-blue-900 text-black hover:bg-black hover:text-white rounded-md w-[100px] h-10 mr-3'> Sign Up</button>
          <button className='border bg-[#000814] border-blue-900 text-white hover:bg-black hover:text-white rounded-md w-[100px] h-10'> Login</button>
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
      <ul className={!nav ? 'hidden' : 'absolute bg-black text-white w-full px-8'}>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Home" className='cursor-pointer' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="About" className='cursor-pointer' smooth={true} offset={50} duration={500}>About</Link></li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Support" className='cursor-pointer' smooth={true} offset={50} duration={500}>Support</Link></li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Platfrom" className='cursor-pointer' smooth={true} offset={-50} duration={500}>Platform</Link></li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Pricing" className='cursor-pointer' smooth={true} offset={50} duration={500}>Pricing</Link></li>
        <li className='p-4 mx-2 cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Blog" className='cursor-pointer' smooth={true} offset={-70} duration={500}>Blog</Link></li>
        <div className='my-4 flex flex-col'>
          <button className='border bg-zinc-200 border-blue-900 text-black hover:bg-black hover:text-white rounded-md  h-10 mr-3 mb-4'>Sign Up</button>
          <button onClick={indefinite} className='border bg-blue-900 border-blue-900 text-white hover:bg-black hover:text-white rounded-md  h-10 mr-3'>Login</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar