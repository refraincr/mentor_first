import { c } from '@/data/data'
import { FaStar } from "react-icons/fa"
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
                className='flex justify-between px-15'
                >
                    {[...Array(5)].map((_,i)=>(
                        <FaStar
                        key={i}
                        className={`w-18 h-18 ${
                            i <= rating
                            ? 'text-yellow-400' 
                            : 'text-empty hover:text-yellow-400'
                        }`}
                        onMouseEnter={()=>setRating(i)}
                        />
                    ))}
                </div>
                <p
                className='text-center text-lg'
                >{content.response[4-rating]}</p>
            </div>
        </>
    )
}

export default Card