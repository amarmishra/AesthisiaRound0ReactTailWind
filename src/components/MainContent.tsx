import React from 'react'
import { data } from '../logo_content_data'
import {useEffect,useRef,useState} from 'react'
import {RxDotFilled} from 'react-icons/rx'

// interface MainContntProps{
//   index:number
// }
export const MainContent= () => {


  //animation 
  const index=useRef<number>(0)
  const [dataIndex,setDataIndex]=useState<number>(0)

  useEffect(()=>{
    
    const id=setInterval(()=>{
      index.current = (index.current >= data.length-1 ? 0 : index.current+1) 
      setDataIndex(index.current)
    },4000)

    return ()=>{
      clearInterval(id)
    }
  },[])

  return (
    
    <div className='w-3/5 h-3/5 absolute top-[30%] md:top-2/5 lg:top-1/2 left-1 flex-col justify-between items-start '>
      <div className='w-full  text-4xl flex flex-wrap items-start -tracking-tighter  font-poppins font-600 '>
        <span className='w-full font-semibold text-white'>{data[dataIndex].heading}</span>
        <span className='w-full text-[color:var(--custom-management-color)] '>{data[dataIndex].content}</span>
      </div>
      <div className='flex justify-start align-center w-full'>
        { data.map((item,i)=>{
          return <RxDotFilled key={`${i}-${item.heading}`} className={i===dataIndex? 'text-slate-200':'text-slate-600'}></RxDotFilled>
        })}
      </div>
    </div>
    
  
    
  
  )
}
