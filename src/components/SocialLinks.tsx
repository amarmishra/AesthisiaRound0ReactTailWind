import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const SocialLinks = () => {
  return (
    <div className='absolute w-20 h-[15px] text-xl flex justify-between  items-start right-1 bottom-[15px]'>  
        <a href="https://aesthisia.com/"><FaIcons.FaLinkedinIn className='text-white'></FaIcons.FaLinkedinIn></a>
        <a href="https://aesthisia.com/"><FaIcons.FaFacebook className='text-white '></FaIcons.FaFacebook></a>
        <a href="https://aesthisia.com/"><FaIcons.FaInstagram className='text-white'></FaIcons.FaInstagram></a>
    </div>
  )
}
