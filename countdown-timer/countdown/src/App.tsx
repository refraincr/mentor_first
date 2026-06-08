import './App.css'

import { useState,useEffect } from 'react'

function App() {
    const [time,setTime] = useState({
        months:0,
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
    })

    // 挂载时一次
    useEffect(()=>{
        function isFirst() {
            const cookies = document.cookie.split(';')
            // 没有cookis记录
            return !cookies.some(cookie => cookie.trim().startsWith('firstEnterTime'))
        }
        if (isFirst()) {
            document.cookie = `firstEnterTime=${Date.now()}`
        } else {
            const cookies = document.cookie.split(';')
            // 找到cookie
            let firstEnterTime
            for (const c of cookies) {
                if (c.startsWith('firstEnterTime=')) {
                    firstEnterTime = Number(c.substring(c.indexOf('=')+1))
                }
            }
            if (!firstEnterTime) return 

            function updateTime(firstEnterTime:number) {
                const totalSeconds = Math.floor((Date.now() - firstEnterTime)/1000)
                const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60))

                const days = Math.floor(
                (totalSeconds % (30 * 24 * 60 * 60)) /
                (24 * 60 * 60)
                )

                const hours = Math.floor(
                (totalSeconds % (24 * 60 * 60)) /
                (60 * 60)
                )

                const minutes = Math.floor(
                (totalSeconds % (60 * 60)) /
                60
                )

                const seconds = totalSeconds % 60
                setTime({seconds,minutes,hours,days,months})
            }

            updateTime(firstEnterTime)
            const timer = setInterval(()=>{
                updateTime(firstEnterTime)
            },1000)
            return ()=>clearInterval(timer)
        }
    },[])

    return (
        <div className={`w-full h-screen bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover bg-center pt-30 text-[#2c4a64]`}>
            {/* 标题 */}
            <div className='w-full flex flex-col items-center gap-6'>
                <h2 className='text-4xl font-bold'>-- countdown to --</h2>
                <h1 className='text-6xl font-bold'>New Year</h1>
            </div>
            {/* 时间 */}
            <ul className='mt-22 mx-auto flex text-8xl font-bold flex-wrap gap-x-20 gap-y-10 justify-center lg:gap-x-50'>
                <li className='flex flex-col items-center'>
                    {time.months}<span className='text-xl'>months</span>
                </li>
                <li className='flex flex-col items-center'>
                    {time.days}<span className='text-xl'>days</span>
                </li>
                <li className='flex flex-col items-center'>
                    {time.hours}<span className='text-xl'>hours</span>
                </li>
                <li className='flex flex-col items-center'>
                    {time.minutes}<span className='text-xl'>minutes</span>
                </li>
                <li className='flex flex-col items-center'>
                    {time.seconds}<span className='text-xl'>seconds</span>
                </li>
            </ul>
        </div>
    )   
}

export default App
