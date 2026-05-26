import './App.css'
// 图标
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { PiTelegramLogoLight } from "react-icons/pi";

import { useState,useRef,useEffect } from 'react'


function ShareCard({link}) {

    // 图标的公共样式
    const iconStyle = 'w-18 h-18 bg-gray-300 flex items-center justify-center rounded-full cursor-pointer hover:border-2'

    // 复制
    const [ copy,setCopy ] = useState(false)

    // 脱围机制，清除计时器
    const timerRef = useRef(null)

    async function handleClick() {
        try {
          await navigator.clipboard.writeText(link);
          setCopy(true)
        } catch (err) {
          console.error('复制失败:', err);
        }
    }

    useEffect(()=>{
        if (!copy) return
        timerRef.current = setTimeout(()=>setCopy(false),3000)
        return ()=>clearTimeout(timerRef.current)
    },[copy])

    return (
        <div 
        className='bg-card-bg w-210 mx-auto p-18 mt-30 flex flex-col gap-6 rounded-4xl'
        >
        <h2 
        className='text-2xl font-bold'
        >Share this challage</h2>
            <ul className='flex w-full justify-between'>
                <li className={iconStyle}><CiTwitter size='48'/></li>
                <li className={iconStyle}><CiLinkedin size='48'/></li>
                <li className={iconStyle}><SlSocialFacebook size='48'/></li>
                <li className={iconStyle}><FaInstagram size='48'/></li>
                <li className={iconStyle}><RiPinterestLine size='48'/></li>
                <li className={iconStyle}><PiTelegramLogoLight size='48'/></li>
            </ul>
            <div>
                <span className='font-bold'>or copy link</span>
                <div className='mt-4 flex justify-between bg-gray-300 w-full p-4 rounded-xl'>
                    <a className='truncate max-w-160' href={link}>{link}</a>
                    <span className={`font-bold ${copy ? '' : 'hover:cursor-pointer'}`} onClick={handleClick} >{copy ? 'Copied' : 'Copy'}</span>
                </div>
            </div>
        </div>
    )
}

function App() {
    const link = 'https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V'

    return (
        <>
            <ShareCard link={link} />
        </>
    )
}

export default App
