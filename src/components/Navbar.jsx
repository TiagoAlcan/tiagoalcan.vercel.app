import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center '>
        <div className='text-2x1 font-bold hidden md:inline'>
            <img class="size-24 shrink-0" src="/tiagoalcan.png" alt="Portfolio Logo" />
        </div>
            <div className='space-x-6'>
                <a href='#home' className='hover:text-gray-400 text-size'>Home</a>
                <a href='#about' className='hover:text-gray-400'>About Me</a>
                <a href='#services' className='hover:text-gray-400'>Services</a>
                <a href='#projects' className='hover:text-gray-400'>Projects</a>
                <a href='#contact' className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r to-amber-400 text-white text-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
    </header>
  )
}

export default Navbar
