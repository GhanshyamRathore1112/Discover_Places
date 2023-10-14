import Image from 'next/image'
import React from 'react'
import Login from './Login'


function Header() {
  
  return (
    <div className='flex justify-between'>
    <div className='flex gap-3 items-center'>
      <Image src='/logo.png' alt='logo'
      width={50} height={50}/>
      <h2 className='text-[25] text-red-500 tracking-widest '>Discover</h2>
    </div>
    <ul className='flex gap-8 items-center'>
    <li className='text-[18px]
         hover:text-red-500 cursor-pointer'>Home</li>
        <li className='text-[18px]
         hover:text-red-500 cursor-pointer'>About Us</li>
        <li className='text-[18px]
         hover:text-red-500 cursor-pointer'>Contact Us</li>
    </ul>
    <Login/>
    
    </div>
  )
}

export default Header
