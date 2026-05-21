// use
import {useState,useEffect,useCallback } from 'react'

// 图标
import { BsFillCheckCircleFill } from "react-icons/bs"; // success
import { FaCircleInfo } from "react-icons/fa6";  // info
import { IoWarning } from "react-icons/io5";  // warning
import { BiSolidXCircle } from "react-icons/bi";  // error
import { CgClose } from "react-icons/cg";

function MyButton({toStyle,content,onClick}) {
    
    const styles = {
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        error: 'bg-error',
    }
    return (
        <li className={`${styles[toStyle]} w-full text-2xl text-white 
        py-4 text-center rounded-xl hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-200 transition-all`}
        onClick={onClick}
        >
            {content}
        </li>  
    )
}

function Tip({toStyle,content,id,onClose}) {
    // 动画相关
    const [isEntering,setIsEntering] = useState(false)
    const [isExiting,setIsExiting] = useState(false) 


    // 样式映射表
    const border = {
        success: 'border-b-success',
        info: 'border-b-info',
        warning: 'border-b-warning',
        error: 'border-b-error',
    }
    const icons = {
        success: <BsFillCheckCircleFill className="text-success size-6" />,
        info: <FaCircleInfo className="text-info size-6" />,
        warning: <IoWarning className="text-warning size-6" />,
        error: <BiSolidXCircle className="text-error size-6" />,
    }
    const icon = icons[toStyle]

    // 手动关闭
    function handleClose() {
        setIsExiting(true)
        setTimeout(()=>{
            // 动画完成后去除tip
            onClose(id)
        },300)
    }

    // 挂载后
    useEffect(()=>{
        requestAnimationFrame(()=>setIsEntering(true))
    },[])

    // 自动关闭
    useEffect(()=>{
        const timerAnime = setTimeout(()=>{
            setIsExiting(true)
        },4000)
        // 延迟300毫秒后移除元素,保证动画不中断
        // !!! 不是队列这里并发执行
        // const timerRemove = setTimeout(()=>{
        //     onClose(id)
        // },300)
        
        const timerRemove = setTimeout(()=>{
            onClose(id)
        },4300)
        
        return ()=>{
            clearTimeout(timerRemove)
            clearTimeout(timerAnime)
        }
    },[id,onClose])
    
    return (
        <div 
        className={`border-b-4 ${border[toStyle]} bg-white w-full rounded-md  
         flex items-center justify-between py-5 px-4 shadow-md
         transition-all duration-300 easy-out
         ${isEntering ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-95'}
         ${isExiting ? 'opacity-0 translate-x-full scale-95' : ''}`}
        >
            <div className="flex-1">{icon}</div>
            <span className="flex-7 text-xl">{content}</span>
            <CgClose className="flex-1 text-right size-7 -mr-4 hover:cursor-pointer text-gray-400"
            onClick={handleClose}/>
        </div>
    )
}

export default function Toast() {
    const [tips,setTips] =useState([])

    // 添加提示
    const addTip = (type,message)=> {
        const newTip = {
            id:Date.now(),
            type,message
        }
        setTips(prev=>[...prev,newTip])
    }

    // 删除提示
    const removeTip = useCallback(id =>{
        setTips(prev=>prev.filter(p=>p.id !== id))
    },[])

    return (
        <>
            {/* 弹窗 */}
            <div
            className='fixed top-8 right-12 z-20 flex flex-col w-1/3 gap-4'
            >
                {tips.map((tip)=>(
                <Tip key={tip.id} toStyle={tip.type} content={tip.message} id={tip.id} onClose={removeTip}/>
                ))}
            </div>
            {/* 按钮表 */}
            <ul
            className="bg-white w-1/3 px-8 py-10 rounded-xl shadow-lg mx-auto mt-60 flex flex-col gap-8"
            >
                <MyButton toStyle={"success"} content={"Success"} onClick={()=>addTip('success','操作成功')} />
                <MyButton toStyle={"info"} content={"Info"} onClick={()=>addTip('info','这是一条提示信息')} />
                <MyButton toStyle={"warning"} content={"Warning"} onClick={()=>addTip('warning','请注意，这有潜在问题')} />
                <MyButton toStyle={"error"} content={"Error"} onClick={()=>addTip('error','操作失败，请重试')} />
            </ul>
        </>
    )
}


