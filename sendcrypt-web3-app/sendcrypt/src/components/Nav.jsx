import { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";

export default function Nav() {

    const [ open,setOpen ] = useState(false)

    const linkStyle = `cursor-pointer hover:text-white transition`

    return (
        <nav className="w-4/5 mx-auto flex pt-10 relative min-w-100">
            <h2 className="flex-1 text-3xl font-bold flex cursor-pointer">
                <span className="text-white">Send</span>
                <span className="text-yellow-300">Crypt</span>
            </h2>
            <ul className="hidden flex-6 px-8 md:flex text-gray-500 gap-8 items-center">
                <li className={linkStyle}>Markets</li>
                <li className={linkStyle}>Portfolio</li>
                <li className={linkStyle}>Products</li>
            </ul>
            <button className="hidden md:block ml-8 flex-1 bg-yellow-300 px-6 py-3 rounded-xl cursor-pointer whitespace-nowrap">Connect Wallet</button>
            {/* 下拉菜单 */}
            {open && (
                <div className='md:hidden mt-6 bg-gray-900 p-6 rounded-2xl absolute right-10 top-4'>
                    <ul className='flex flex-col gap-6 text-gray-600'>
                        <li className={linkStyle}>Markets</li>
                        <li className={linkStyle}>Portfolio</li>
                        <li className={linkStyle}>Products</li>
                    </ul>
                    <button className="w-full mt-6 bg-yellow-300 text-black py-3 rounded-xl text-md px-2">Connect Wallet</button>
                </div>
            )}
            {/* 移动端按钮 */}
            <button className='md:hidden text-4xl text-gray-500 cursor-pointer'
            onClick={()=>setOpen(!open)}>{ open ? <HiX /> : <HiMenu /> }</button>
            
        </nav>
    )
}