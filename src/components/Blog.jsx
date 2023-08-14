import React from 'react'
import Blog1 from '../assets/blog-img-1.jpg'
import Blog2 from '../assets/blog-img-2.jpg'
import Blog3 from '../assets/blog-img-3.jpg'
import Blog4 from '../assets/blog-img-4.jpg'

const Blog = () => {
    return (
        <div name="Blog">
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Populer Blogs</h2>
                <p className='text-2xl py-6 text-black'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='max-w-[1240] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-8'>
                <div className='shadow-lg rounded-md'>
                    <div className='overflow-hidden'><img src={Blog1} alt="" className='hover:scale-110 duration-1000'/></div>
                    <p className='text-2xl p-2 text-black'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className='flex p-2 cursor-pointer'>
                        <p>Read More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='h-6' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                    </div>
                <div className='shadow-lg rounded-md'>
                <div className='overflow-hidden'><img src={Blog2} alt="" className='hover:scale-110 duration-1000'/></div>
                    <p className='text-2xl p-2 text-black'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className='flex p-2 cursor-pointer'>
                        <p>Read More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='h-6' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                    </div>
                <div className='shadow-lg rounded-md'>
                <div className='overflow-hidden'><img src={Blog3} alt="" className='hover:scale-110 duration-1000'/></div>
                    <p className='text-2xl p-2 text-black'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className='flex p-2 cursor-pointer'>
                        <p>Read More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='h-6' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                </div>
                <div className='shadow-lg rounded-md'>
                <div className='overflow-hidden'><img src={Blog4} alt="" className='hover:scale-110 duration-1000'/></div>
                    <p className='text-2xl p-2 text-black'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className='flex p-2 cursor-pointer'>
                        <p>Read More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='h-6' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog