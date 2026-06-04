import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  return <Typeahead />
}

function Typeahead() {
  const [ open,setOpen ] =  useState<boolean>(false)
  const [ openDely,setOpenDelay ] = useState<boolean>(false)
  
  // 点击输入框外部关闭
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    function handleClickOutside(e:MouseEvent) {
      if(!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false)
        setOpenDelay(false)
      }
    }
    document.addEventListener('mousedown',handleClickOutside)
    return ()=>document.removeEventListener('mousedown',handleClickOutside)
  },[])

  // 延迟动画
  useEffect(()=>{
    if (open) {
      const timer = setTimeout(()=>{
          setOpenDelay(true)
      },300)
      return ()=>clearTimeout(timer)
    }
  },[open])

  const suggextions = ["JavaScript", "Java", "HTML", "CSS", "TailwindCSS", "Bootstrap"]
  return (
    <div className='mx-auto w-180 mt-50' ref={wrapperRef}>
      <form onSubmit={e=>e.preventDefault()} className={`w-full bg-white h-20 flex ${
        open ? 'rounded-t-3xl' : 'rounded-3xl'
      } transition-all duration-300`}>
        <input type="text" 
        className='h-20 w-160 outline-none text-3xl pl-6'
        onFocus={()=>setOpen(true)}
        />
        <button type='submit' className={`h-20 w-20 bg-[#5c6b73] text-white text-2xl ${
        open ? 'rounded-t-3xl rounded-l-3xl' : 'rounded-3xl'
        } transition-all duration-300 cursor-pointer`}>Go</button>
      </form>
      <div className={`grid transtion-all duration-300 overflow-hidden bg-white rounded-b-3xl
        ${openDely ? 'grid-rows-[1fr] mt-9 py-10' : 'grid-rows-[0fr]'}`}>
          <ul className=' min-h-0'>
            {suggextions.map((s,idx)=><li className='w-full' key={idx}><a
              className='w-full block hover:bg-[#eff6f7] cursor-pointer px-6 text-xl text-[#aec1ca] py-1
              hover:text-[#5c6b73]'
              >{s}</a></li>)}
          </ul>
        </div>
    </div>
  )
}

export default App
