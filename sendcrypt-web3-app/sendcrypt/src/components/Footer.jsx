// 图标
import { IoLogoFacebook } from "react-icons/io";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full h-30 border-t-3 border-t-gray-700 flex flex-col min-w-100 justify-between items-center px-9 gap-2 py-4 md:flex-row">
            <h2 className="text-2xl text-white font-bold cursor-pointer md:text-3xl">
                <span>Send</span>
                <span className="text-yellow-300">Crypt</span>
            </h2>
            <div className="flex text-gray-500 gap-6">
                <FaTwitterSquare className="size-7 md:size-9 hover:text-white transition cursor-pointer" />
                <BiLogoLinkedinSquare className="size-7 md:size-9 hover:text-white transition cursor-pointer" />
                <IoLogoFacebook className="size-7 md:size-9 hover:text-white transition cursor-pointer" />
            </div>
            <span className="text-gray-500 cursor-pointer hover:text-white text-sm md:text-md lg:text-lg">Copyright © 2022 SendCrypt. All rights reserved</span>
        </div>
    )
}