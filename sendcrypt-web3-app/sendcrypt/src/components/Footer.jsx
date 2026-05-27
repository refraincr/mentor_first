// 图标
import { IoLogoFacebook } from "react-icons/io";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full h-24  border-t-3 border-t-gray-700 flex justify-between items-center px-18">
            <h2 className="text-3xl text-white font-bold cursor-pointer">
                <span>Send</span>
                <span className="text-yellow-300">Crypt</span>
            </h2>
            <div className="flex text-gray-500 gap-6">
                <FaTwitterSquare className="size-8 hover:text-white transition cursor-pointer" />
                <BiLogoLinkedinSquare className="size-9 hover:text-white transition cursor-pointer" />
                <IoLogoFacebook className="size-9 hover:text-white transition cursor-pointer" />
            </div>
            <span className="text-gray-500 cursor-pointer hover:text-white">Copyright © 2022 SendCrypt. All rights reserved</span>
        </div>
    )
}