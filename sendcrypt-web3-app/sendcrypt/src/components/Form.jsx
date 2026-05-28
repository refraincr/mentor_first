import WebImg from '@/assets/web-img.png'
// 暂时没有共享情况，在此处引入state
import { useState } from 'react'

export default function Form() {
    return (
        <div className='w-4/5 mx-auto flex flex-col justify-between min-w-100 lg:flex-row'>
            <img src={WebImg} className='w-100 h-100 mx-auto md:w-120 md:h-120 lg:w-130 lg:h-130 lg:-ml-10' />
            <FormCard />
        </div>
    )
}


function FormCard() {
    const [ address,setAddress ] = useState('')
    const [ amount,setAmount ] = useState('')
    const [ link,setLink ] = useState('')
    const [ message,setMessage ] = useState('')

    // 验证待办

    return (
        <form className=' mx-auto w-80 h-fit bg-[#21242d] rounded-2xl flex flex-col gap-3 p-5 md:gap-6 md:p-10 md:w-120' onSubmit={e=>e.preventDefault()}>
            <input type="text" 
            className='bg-[#16171d] placeholder:text-gray-500 p-3 text-white text-lg rounded-xl md:p-5' 
            placeholder='Recevier Address' value={address} onChange={e=>setAddress(e.target.value)} />
            <input type="text" className='bg-[#16171d] placeholder:text-gray-500 p-3 text-white text-lg rounded-xl md:p-5' 
            placeholder='Amount (ETH)' value={amount} onChange={e=>setAmount(e.target.value)} />
            <input type="text" className='bg-[#16171d] placeholder:text-gray-500 p-3 text-white text-lg rounded-xl md:p-5' 
            placeholder='Enter GIF Link' value={link} onChange={e=>setLink(e.target.value)} />
            <input type="text" className='bg-[#16171d] placeholder:text-gray-500 p-3 text-white text-lg rounded-xl md:p-5' 
            placeholder='Enter Message' value={message} onChange={e=>setMessage(e.target.value)} />
            <input type="submit" value='send now'
            className='py-2 rounded-xl bg-yellow-400 font-semibold text-lg
             cursor-pointer hover:scale-99 transition-all md:py-4' />
        </form>
    )
}