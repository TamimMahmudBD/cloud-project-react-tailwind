import React from 'react'

const About = () => {
    return (
        <div className='w-full py-32 bg-white'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted my developers across the world</h2>
                    <p className='text-3xl py-6 text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ut eveniet, enim labore aspernatur vel optio? Molestias assumenda nihil ipsa.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2 text-center text-white'>
                    <div className='border bg-[#1E3A8A] border-gray-300 py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold '>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border bg-[#1E3A8A] border-gray-300 py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold'>24/7</p>
                        <p className='text-gray-400 mt-2'>Delivery</p>
                    </div>
                    <div className='border bg-[#1E3A8A] border-gray-300 py-8 rounded-xl shadow-2xl'>
                        <p className='text-6xl font-bold'>100K</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About