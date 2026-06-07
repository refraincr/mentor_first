import './App.css'
import { BiCheck } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import { useState } from 'react'


interface DataType {
  plan:string;
  price:string;
  description:string;
  isInclude:boolean;
  isConvert:boolean;
}

function App() {

  const [ plan,setPlan ] = useState<string>('standard')

  const navStyle = 'h-full flex items-center cursor-pointer flex-1 justify-center rounded-xl'

  const data:DataType[] = [
    {
      plan:'BASIC',
      price:'60',
      description:'Up to 50 creative & professional icons + one color versions/themes',
      isInclude:true,
      isConvert:false
    },
    {
      plan:'STANDARD',
      price:'120',
      description:'Up to 100 creative & professional icons + two color versions/themes per month',
      isInclude:true,
      isConvert:true
    },
    {
      plan:'Premium',
      price:'180',
      description:'Up to 200 creative & professional icons + four color versions/themes',
      isInclude:true,
      isConvert:true
    },
  ]

  // 根据plan获取内容数据
  function getPlan() {
    if (plan === 'basic') {
      return data[0]
    } else if (plan === 'standard') {
      return data[1]
    }
    return data[2]
  }

  return (
    <div className='bg-white rounded-2xl mx-auto mt-10 w-100 h-150 pt-16'>
      <div className='w-full px-2 lg:px-8'>
        <ul className='w-full h-18 p-2 border border-[#e8e8e8] rounded-2xl flex items-center justify-around font-bold'>
          <li className={navStyle+` ${plan==='basic'?'bg-[#45a69a] text-white':''}`}
          onClick={()=>setPlan('basic')}>basic</li>
          <li className={navStyle+` ${plan==='standard'?'bg-[#45a69a] text-white':''}`}
          onClick={()=>setPlan('standard')}>standard</li>
          <li className={navStyle+` ${plan==='premium'?'bg-[#45a69a] text-white':''}`}
          onClick={()=>setPlan('premium')}>premium</li>
        </ul>
      </div>
      <Card content={getPlan()} />
    </div>
  )
}


const Card = ({content}:{content:DataType}) => {
  return (
    <div className='mt-12 w-full px-18'>
      <span className='text-[#5b5b5e] text-[12px] font-semibold'>{content.plan}</span>
      <div className='mt-2 flex justify-between font-bold'>
        <h2>Icon Sets</h2>
        <h2>${content.price}</h2>
      </div>
      <p className='text-[#3e3e3e] text-[12px] font-semibold mt-8'>{content.description}</p>
      <div className='flex flex-col gap-2 text-[10px] mt-6'>
        <span className='flex gap-2 items-center'>
          {content.isInclude ? 
          <BiCheck className='text-lg rounded-full bg-[#e0dff6] text-[#4a43a3]'/> :
           <IoClose className='text-lg rounded-full bg-[#e0dff6] text-[#4a43a3]'/>}Included source files
        </span>
        <span className='flex gap-2 items-center'>
          {content.isConvert ?
           <BiCheck className='text-lg rounded-full bg-[#e0dff6] text-[#4a43a3]'/> :
            <IoClose className='text-lg rounded-full bg-[#e0dff6] text-[#fa3053]'/>}Converted to responsive components
        </span>
      </div>
      <button className='rounded-full px-20 py-4 bg-[#4d46a5] mt-12 text-white cursor-pointer hover:-translate-y-1 transition-all duration-300'>Add to cart</button>
    </div>
  )
}

export default App
