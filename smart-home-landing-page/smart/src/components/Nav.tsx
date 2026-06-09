import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { useState,useEffect } from "react";

// 获取屏幕宽度的hook
function useGetWidth() {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(()=>{
        const handleWidthChange = () => setWidth(window.innerWidth)
        window.addEventListener('resize',handleWidthChange)
        return ()=>window.removeEventListener('resize',handleWidthChange)
    },[])
    
    return width
}

export default function Nav() {
    const [ open,setOpen ] = useState<boolean>(false)

    const links = [
        "Home",
        "About",
        "Testimonials",
        "Contact",
        "Login",
        "Sign up"
    ]

    const outLinks = [
        <FaFacebookF />,
        <FaInstagram />,
        <FaTwitter />,
        <BiLogoLinkedinSquare />
    ]



    if (useGetWidth() >= 1024) {
    
      return (
        <nav className="pt-10 px-26 flex justify-between items-center text-white text-xl">
            <ul className="flex gap-8 text-xl">
                {links.slice(0,4).map((l,idx)=>(
                    <li key={idx}><a className="cursor-pointer">{l}</a></li>
                ))}
            </ul>
            <h1 className="font-bold text-3xl cursor-pointer mr-16">smartHome</h1>
            <div className="flex">
                <button className="mr-10 cursor-pointer">Login</button>
                <button className="bg-white text-black py-3 px-8 rounded-md cursor-pointer shadow-2xl min-w-max">Sign up</button>
            </div>
        </nav>
      ) 
    } 
    return (
        <nav>
            <div className="flex justify-between text-4xl pt-10 px-6 text-white font-bold">
                <h1>smartHome</h1>
                <button className="cursor-pointer" onClick={()=>setOpen(!open)}>
                    {open ? <AiOutlineClose /> :<GiHamburgerMenu />}
                </button>
            </div>
            <div className={`bg-[#1e5afa] w-full overflow-hidden grid transition-all
                ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="min-h-0 px-6">
                    {/* 站内链接 */}
                    <ul className="text-white mt-8 text-2xl flex flex-col w-full">
                        {links.map((l,idx)=>(
                            <li key={idx} className="w-full">
                                <a className="cursor w-full block p-3 rounded-xl cursor-pointer 
                                hover:bg-white hover:text-black transition-all">{l}</a>
                            </li>
                        ))}
                    </ul>
                    {/* 站外链接 */}
                    <ul className="flex gap-10 text-2xl text-white mt-60 justify-center">
                        {outLinks.map((l,idx)=>(
                            <li key={idx} className="cursor-pointer"><a>{l}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}