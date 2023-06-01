import React from 'react'
import * as BsIcons from 'react-icons/bs'
export const HomeLink = () => {
  return (
    <div className='absolute w-20 h-10 bottom-1 left-1 text-white'>
        <BsIcons.BsGlobe></BsIcons.BsGlobe>
        <a href="aesthesia.com" className=' inline opacity-70'>aesthesia.com</a>
    </div>
  )
}
