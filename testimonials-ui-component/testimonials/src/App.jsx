import { reviews } from '@/data/commentData'
import { FaStar } from "react-icons/fa";
import './App.css'

import { useState } from 'react';

function App() {
  // 卡片数据
  const commentData = reviews
  // 偏移
  const [ x,setX ] = useState(0)

  function handleClick(e) {
    if (e.target.innerHTML === '&lt;' && x+1<=reviews.length-1) {
      // < 按钮
      setX(x+1)
    } else if (e.target.innerHTML === '&gt;' && x-1>=0) {
      setX(x-1)
    }
  }

  return (
    <div className='w-4/5 mx-auto mt-40'> 
      <div className='flex justify-between'>
        <h2 className='text-4xl font-bold text-[#071c4d] w-100'>What Our Customers Are Saying</h2>
        <div className='flex gap-4 text-4xl text-[#071c4d]'>
          <button className='rounded-full border border-2 border-[#0b163f] w-16 h-16 cursor-pointer
           hover:bg-[#0b163f] hover:text-white'
          onClick={e=>handleClick(e)}>&lt;</button>
          <button className='rounded-full border border-2 border-[#0b163f] w-16 h-16 cursor-pointer
           hover:bg-[#0b163f] hover:text-white'
          onClick={e=>handleClick(e)}
          >&gt;</button>
        </div>
      </div>
      <div className='mt-10 overflow-hidden'>
        <div className='w-fit pb-[20px] flex gap-10 transition-all duration-300' style={{transform:`translateX(${-30*x}rem)`}}>
          {commentData.map(c=><Comment key={c.id} {...c} />)}
        </div>
      </div>
    </div>
  )
}

function Comment({title,content,name,role,img}) {
  // 控制鼠标悬停时的状态
  const [isHover,setIsHover] = useState(false)

  const randomStyleMap = [
    {
      shadow: '#5bb297',
      bgc: '#def4ed'
    },
    {
      shadow: '#fe6b7e',
      bgc: '#fcdde1'
    },
    {
      shadow: '#175cff',
      bgc: '#ceddff'
    }
  ]

  const [randomStyle] = useState(()=>{
    return randomStyleMap[Math.floor(Math.random()*randomStyleMap.length)]
  })

  return (
    <div className='flex flex-col gap-4 p-4 w-110 rounded-xl cursor-pointer transition-shadow' 
    style={{backgroundColor:randomStyle.bgc,boxShadow:`10px 10px ${isHover ? '10px 0': '0 0'} ${randomStyle.shadow}`}}
    onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
      <ul className='flex gap-1'>
        {Array(5).fill().map(()=> <li className='p-1 rounded-sm flex' style={{backgroundColor:randomStyle.shadow}}><FaStar className='text-white' /></li> )}
      </ul>
      <h3 className='text-2xl font-bold text-[#071c4d]'>{title}</h3>
      <p>{content}</p>  
      <div className='flex gap-2 mt-2'>
        <img src={img} alt={name} className='w-11 h-11 rounded-full border-2 border-gray-200' />
        <div className='flex flex-col'>
          <h4 className='font-bold'>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </div>
  )
}

export default App
