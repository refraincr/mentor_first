import { useState,useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({onClose}) {
    // 评分
    const [ rating,setRating ] = useState(-1) 

    // 阻止冒泡
    function handleClose(e) {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    // 拖动功能
    const [position,setPosition] = useState({
        x:320,
        y:150
    })
    const offset = useRef({
        x:0,
        y:0
    })
    const draging = useRef(false)
    function handleMouseDown(e) {
        draging.current = true

        // 初始化偏移量
        offset.current = {
            x:e.clientX - position.x,
            y:e.clientY - position.y,
        }
    }

    function handleMouseMove(e) {
        if (!draging.current) return

        // 改变定位
        setPosition({
            x:e.clientX - offset.current.x,
            y:e.clientY - offset.current.y
        })
    }

    function handleMouseUp() {
        draging.current = false
    }

    return createPortal(
        // 最外层的遮罩层
        <div className=' bg-gray-500/50 w-full h-screen z-10 fixed inset-0' 
        onClick={handleClose} 
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        >
            <div className="bg-deeppurple w-3/5 rounded-2xl text-white p-6 px-12
             flex flex-col gap-10 items-center
             fixed z-20"
             style={{
                left:position.x,
                top:position.y
             }}
            //  onClick={e=>e.stopPropagation()} // 阻止冒泡方法二
             >
                <button className="absolute right-6 text-2xl hover:cursor-pointer" onClick={onClose}
                
                >X</button>
                <h2
                className="mt-15 w-5/6 text-3xl text-center cursor-move"
                onMouseDown={handleMouseDown}
                >How likely are you to recommend FrontendPro to someone you know?</h2>
                <div className="w-full">
                    <div
                    className="flex w-full justify-between"
                    >
                        {Array(10).fill().map((_,idx)=>(
                            <button key={idx}
                            className={`bg-btnbg w-14 h-14 rounded-lg border-btnborderbg border-2 text-2xl text-gray-300 font-medium
                             translate-all duration-200 easy-out hover:scale-95 hover:cursor-pointer ${(idx+1)===rating ? 'border-white' : ''}`}
                            onMouseEnter={()=>setRating(idx+1)}
                            >{idx+1}</button>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between text-xs text-gray-400">
                        <span>Not likely at all</span>
                        <span>Extremely likely</span>
                    </div>
                </div>
                <div className="w-full flex justify-between text-lg">
                    <button
                    className="border-2 border-blue-500 px-11 py-2 rounded-sm
                     hover:cursor-pointer hover:bg-blue-500"
                    onClick={onClose}
                    >Cancel</button>
                    <button
                    className="border-2 border-blue-500 px-11 py-2 rounded-sm
                     hover:bg-blue-500 hover:cursor-pointer"
                    onClick={onClose}
                    >Submit</button>
                </div>
            </div>
        </div>,
        document.body  // 渲染到body下
    )
}