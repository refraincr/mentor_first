import WebImg from '@/assets/web-img.png'

// 自定义hook查看当前屏幕宽度
import { useState,useEffect } from 'react'

function useWindowWidth() {
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = ()=>setWidth(window.innerWidth)

        window.addEventListener('resize',handleResize)

        // cleanup函数
        return ()=>window.removeEventListener('resize',handleResize)
    },[])

    return width
}

export default function Connection() {

    return (
        <div className="w-4/5 mx-auto min-w-100 flex flex-col lg:flex-row justify-between">
            {useWindowWidth() < 1024 && <img src={WebImg} className='w-100 h-100 mx-auto md:w-120 md:h-120' />}
            <div className='flex flex-col gap-3 text-white justify-center items-center lg:items-start'>
                <h1 className='text-4xl font-bold whitespace-nowrap md:text-5xl'>Start Sending Crypto</h1>
                <h1 className='text-4xl font-bold whitespace-nowrap md:text-5xl'>Currency Easily</h1>
                <span className='text-gray-600 text-lg md:text-lg' >Join the world largest crypto exchange</span>
                <button className="mt-4 text-black bg-yellow-300 px-6 py-3 rounded-xl cursor-pointer">Connect Wallet</button>
            </div>
            {useWindowWidth() >= 1024 && <img src={WebImg} className='w-120 h-120' />}
        </div>
    )
}