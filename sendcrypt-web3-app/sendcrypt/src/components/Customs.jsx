import { data } from '@/data/customsData'
import { useMemo } from 'react'

export default function Customs() {

    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-white text-5xl font-bold mb-10'>Latest transations</h1>
            <div className='grid grid-cols-3 gap-x-18 gap-y-12'>
                {data.map(d=><Card key={d.id} content={d} />)}
            </div>
        </div>
    )
}

function Card({content}) {
    const useTruncateMiddle = (text,start=12,end=7) => {
        return useMemo(()=>{
            if (!text) return ''
            if (text.length <= start + end + 3) return text
            return `${text.slice(0,start)}...${text.slice(-end)}` 
        },[text,start,end])
    }

    return (
        <div className='bg-[#21242d] rounded-xl p-4 relative hover:outline-2 outline-white cursor-pointer'>
            <img src={content.img} className='w-full aspect-square object-cover rounded-xl' />
            <div className='bg-yellow-400 py-1.5 px-1 w-fit rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-1/2'>{content.date}</div>
            <ul className='mt-6 text-white'>
                <li><span className='text-gray-500'>From: </span>{useTruncateMiddle(content.from)}</li>
                <li><span className='text-gray-500'>To: </span>{useTruncateMiddle(content.to)}</li>
                <li><span className='text-gray-500'>Amount: </span>{content.amount}</li>
                <li><span className='text-gray-500'>Message: </span>{content.message}</li>
            </ul>
        </div>
    )
}