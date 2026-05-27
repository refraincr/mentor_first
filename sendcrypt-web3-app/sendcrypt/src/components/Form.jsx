import WebImg from '@/assets/web-img.png'
// 暂时没有共享情况，在此处引入state
import { useState } from 'react'

export default function Form() {
    return (
        <div className='w-4/5 mx-auto flex justify-between'>
            <img src={WebImg} className='-ml-12' />
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
        <form className='w-120 h-fit bg-[#21242d] rounded-2xl flex flex-col gap-6 p-10 ' onSubmit={e=>e.preventDefault()}>
            <input type="text" 
            className='bg-[#16171d] placeholder:text-gray-500 p-5 text-white text-lg rounded-xl' 
            placeholder='Recevier Address' value={address} onChange={e=>setAddress(e.target.value)} />
            <input type="text" className='bg-[#16171d] placeholder:text-gray-500 p-5 text-white text-lg rounded-xl' 
            placeholder='Amount (ETH)' value={amount} onChange={e=>setAmount(e.target.value)} />
            <input type="text" className='bg-[#16171d] placeholder:text-gray-500 p-5 text-white text-lg rounded-xl' 
            placeholder='Enter GIF Link' value={link} onChange={e=>setLink(e.target.value)} />
            <input type="text" className='bg-[#16171d] placeholder:text-gray-500 p-5 text-white text-lg rounded-xl' 
            placeholder='Enter Message' value={message} onChange={e=>setMessage(e.target.value)} />
            <input type="submit" value='send now'
            className='py-4 rounded-xl bg-yellow-400 font-semibold text-lg
             cursor-pointer hover:scale-99 transition-all' />
        </form>
    )
}