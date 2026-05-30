// 图片以及样式
import './App.css'
import Logo from '@/assets/payment-logo.png'
import Show from '@/assets/show.png'

// 图标
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

// 'use'
import { useState } from 'react'

function App() {
  return (
    <>
      <div className='w-full px-8 flex flex-col gap-8 lg:px-18 md:gap-10 lg:gap-18'>
        <Nav />
        <div className='w-full flex flex-col gap-8 md:gap-10 lg:gap-18 lg:flex-row lg:items-center lg:justify-between mb-40'>
          <Download />
          <img src={Show} className='w-full mt-10 min-w-80 lg:w-130' />
        </div>
      </div>
      
    </>
  )
}


function Nav() {
  //菜单栏的开关
  const [open,setOpen] = useState(false)

  const links = [
    "Features",
    "Pricing",
    "Help",
    "Blog",
    "About us",
    "Log In",
    "Sign Up",
  ]

  return (
    <>
      <div className='flex w-full justify-between items-center pt-6 lg:pt-12'>
        {/* logo标 */}
        <img src={Logo} className='rounded-full w-10 h-10 cursor-pointer md:w-13 md:h-13 lg:w-16 lg:h-16' />
        {/* 菜单的开关 */}
        <span className='text-white text-6xl cursor-pointer lg:hidden' onClick={()=>setOpen(!open)}>{open ? <IoCloseSharp /> : '='}</span>
        {/* links */}
        <ul className='hidden lg:flex gap-14'>
          {links.map((l,idx)=>{
            if (idx<=4) {
              return (
                <li key={idx} className='text-xl text-gray-500 hover:text-white cursor-pointer transition-all'>{l}</li>
              )
            }
          })}
        </ul>
        {/* auth */}
        <div className='text-xl font-bold gap-4 hidden lg:flex'>
          <button className='bg-[#e9dcff] p-3 px-7 rounded-lg min-w-max cursor-pointer hover:scale-99 transition-all'>Log In</button>
          <button className='bg-[#e9dcff] p-3 px-7 rounded-lg min-w-max cursor-pointer hover:scale-99 transition-all'>Sign Up</button>
        </div>
      </div>
      {/* 菜单 */}
      <div className={`grid transition-all duration-300 overflow-hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} lg:hidden`}>
        <ul className='min-h-0'>
          {links.map((l,idx)=><li key={idx} className={`rounded-md p-2 text-sm text-white 
           hover:bg-[#e9dcff] hover:font-bold hover:text-black cursor-pointer transition-all ${idx === 0 ? 'mt-10' : ''}
           `} >{l}</li>
          )}
        </ul>
      </div>
    </>
  )
}

function Download() {
  return (
    <section className='max-w-120'>
      <span className='text-[10px] text-gray-400 tracking-[.15rem] md:text-lg'>START SAVING MONEY</span>
      <h2 className='text-3xl text-white font-bold mt-3 md:text-4xl md:mt-4 lg:text-5xl lg:leading-normal'>Smart Credit Card For your Daily Life.</h2>
      <button className='mt-3 bg-[#e9dcff] flex items-center gap-1 min-w-max p-2 rounded-md font-bold text-[12px]
       hover:scale-95 transition-all cursor-pointer md:mt-4 md:p-3 md:text-lg md:p-4 md:text-xl'>
        Download <IoArrowDownCircleOutline className='size-5' /> 
      </button>
    </section>
  )
}

export default App
