import { c } from '@/data/data'
import { FaStar,FaStarHalf  } from "react-icons/fa"
import { useState } from 'react'

// 处理鼠标悬停在星星上

function Card() {
    const content = c
    const [ rating,setRating ] = useState(-1)

    return (
        <>
            <div                                                                                                                       
            className='bg-white p-18 my-60 mx-auto w-200 rounded-xl flex flex-col gap-9 shadow-3xl'
            >
                <h1
                className='font-bold text-2xl text-center px-26'
                >{content.title}</h1>
                <div 
                className='flex justify-center gap-10'
                >
                    {[1,3,5,7,9].map(idx=>(
                        <div 
                        className='relative w-18 h-18'
                        >
                            <div 
                            className='absolute top-0 left-0 w-1/2 h-full z-10 cursor-pointer'
                            onMouseEnter={()=>setRating(idx)}
                            />
                            <div 
                            className='absolute top-0 right-0 w-1/2 h-full z-10 cursor-pointer'
                            onMouseEnter={()=>setRating(idx+1)}
                            />
                            {/*  底层空星 */}
                            <FaStar 
                            className='absolute w-18 h-18 text-empty'
                            />
                            {/* 左半区域亮半星 */}
                            {rating >= idx && rating < idx + 1 && (
                                <FaStarHalf 
                                className='absolute w-18 h-18 text-yellow-400'
                                />
                            )}
                            {/* 满星 */}
                            {rating >= idx + 1 && (
                                <FaStar 
                                className='absolute w-18 h-18 text-yellow-400'
                                />
                            )}
                        </div>
                    ))}
                </div>
                <p
                className='text-center text-lg'
                >{content.response[Math.floor((10 - rating)/2)]}</p>
            </div>
        </>
    )
}

export default Card