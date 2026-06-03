
import './App.css'

import { useState,useMemo } from 'react'

function App() {

  return (
    <>
      <Card />
    </> 
  )
}

function Card() {
  // 获取日期数据
  // 日期格式 星期 月 日 年（[ 'Wed', 'Jun', '03', '2026' ]）
  const [ currentDate,setCurrentDate ] = useState(()=>{
    const date = new Date()
    return {
      year:date.getFullYear(),
      day:date.getDate(),
      monthDigal:date.getMonth()+1
    }
  })

  // 左右按钮公共样式
  const arrowBtnStyle = 'text-3xl cursor-pointer'

  // 星期
  const weekList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  // 月份
  const monthList = [
    "Jan",  // 一月
    "Feb",  // 二月
    "Mar",  // 三月
    "Apr",  // 四月
    "May",  // 五月
    "Jun",  // 六月
    "Jul",  // 七月
    "Aug",  // 八月
    "Sep",  // 九月
    "Oct",  // 十月
    "Nov",  // 十一月
    "Dec"   // 十二月
  ];


  // 计算日期
  function getStartsDays(month:number,year:number) {
    // 当月第一天星期几1,2,3,4,5,6,0
    const firstDay = new Date(year, month - 1, 1).getDay()
    const firstDayOfMonth = firstDay === 0 ? 7 : firstDay
    // 上个月的天数
    const prevDays = new Date(year,month-1,0).getDate()

    return Array.from({length:firstDayOfMonth-1},(_,idx)=>prevDays-idx).reverse()
  }

  function getEndsDays(month:number,year:number) {
    // 当月天数
    const days = new Date(year, month, 0).getDate()
    // 当月第一天星期几1,2...
    const firstDay = new Date(year, month - 1, 1).getDay()
    const firstDayOfMonth = firstDay === 0 ? 7 : firstDay
    // 前面两段的天数超过35天：加一行
    if ((firstDayOfMonth+days-1)%7===0) {
      return []
    }
    return Array.from({length:7-(firstDayOfMonth+days-1)%7},(_,idx)=>idx+1)
  }

  function getMiddle(month:number,year:number) {
    const days = new Date(year, month, 0).getDate()
    return Array.from({length:days},(_,idx)=>idx+1)
  }

  // 缓存函数计算结果
  const frontDays = useMemo(()=>{
    return getStartsDays(currentDate.monthDigal,currentDate.year)
  },[currentDate.monthDigal,currentDate.year])

  const middleDays = useMemo(()=>{
    return getMiddle(currentDate.monthDigal,currentDate.year)
  },[currentDate.monthDigal,currentDate.year])

  const endDays = useMemo(()=>{
    return getEndsDays(currentDate.monthDigal,currentDate.year)
  },[currentDate.monthDigal,currentDate.year])


  // 处理按钮
  function handleClick(e:string) {
    if (e === '&gt;') {
      if (currentDate.monthDigal === 12) return 
      setCurrentDate(prev=>({
        ...prev,
        monthDigal:prev.monthDigal+1,
      }))
    } else {
      if (currentDate.monthDigal === 1) return 
      setCurrentDate(prev=>({
        ...prev,
        monthDigal:prev.monthDigal-1,
      }))
    }
  }

  return (
    <div className='w-1/3 bg-white mt-40 mx-auto rounded-xl shadow-xl p-10'>
      {/* 卡片顶部 */}
      <div className='flex justify-between text-2xl font-bold'>
        <h2>{monthList[currentDate.monthDigal-1]} {currentDate.year}</h2>
        <div className='flex gap-8'>
          <button className={arrowBtnStyle} onClick={()=>handleClick('&lt;')}>&lt;</button>
          <button className={arrowBtnStyle} onClick={()=>handleClick('&gt;')}>&gt;</button>
        </div>
      </div>
      {/* 星期日期 */}
      <div className='text-[14px] w-full mt-12'>
        {/* 星期 */}
        <div className='w-full grid grid-cols-7 font-bold gap-10'>
          {weekList.map((w,idx)=><span key={idx}>{w}</span>)}
        </div>
        {/* 日期 */}
        <div className='mt-10 w-full grid grid-cols-7 gap-x-10 gap-y-8'>
          {/* 开头 */}
          {frontDays.map((d,idx)=>{
            return <span className='text-center text-gray-400' key={idx}>{d}</span>
          })}
          {/* 中间 */}
          {middleDays.map((d,idx)=>{
            return <span className={`text-center rounded-full w-8 h-8 flex justify-center items-center ${
              d===currentDate.day ?
               'bg-[#744aff] text-white':
               ''
            }`} key={idx} >{d}</span>
          })}
          {/* 结尾 */}
          {endDays.map((d,idx)=>{
            return <span className='text-center text-gray-400' key={idx}>{d}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
