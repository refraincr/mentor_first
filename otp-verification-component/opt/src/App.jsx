import './App.css'

import { useState,useRef } from 'react'

function App() {
    const [borderState,setBorderState] = useState("waiting")

    const [code,setCode] = useState(['','','',''])
    const inputRefs = useRef([])

    function handleChange(value,index) {
        if (!/^\d+$/.test(value)) return

        // 设置state
        const newCode = code.slice()
        newCode[index] = value.slice(-1)
        setCode(newCode)

        // 前进
        if (value && index<3) {
            inputRefs.current[index+1]?.focus() 
        }
    }

    // 删除时回退
    function handleKeyDown(e,idx) {
        if (e.key !== 'Backspace') return

        const newCode = code.slice()

        // 当前有值
        if (newCode[idx]) {
            newCode[idx] = ''
            setCode(newCode)
            return
        } 

        // 无值
        if (idx>0) {
            // 删除前一个值
            newCode[idx-1] = ''
            setCode(newCode)
            // 前移
            inputRefs.current[idx-1]?.focus()
        }
    }

    function handleClick() {
        if (code.join('')==='2882') {
            alert("successful")
            setBorderState("success")
            return
        }
        setBorderState("fail")
        alert("failed")

    }

    // 公共样式
    const inputStyle = 'bg-[#1a2036] text-[#b1b9d8] text-center w-50 h-60 text-[130px] rounded-lg shadow-md border border-gray-700 placeholder:text-[#2e3650]'

    // 提交后边框样式
    let borderStyle

    if (borderState==='success') {
        borderStyle = 'green'
    } else if (borderState === 'fail') {
        borderStyle = 'red'
    }

    return (
        <div className='bg-[#252b42] w-fit mt-30 mx-auto px-20 pb-10 pt-24 flex flex-col items-center rounded-xl'>
            <h2 className='text-2xl text-gray-400 font-bold'>Verify your email address</h2>
            <span className='mt-4 text-gray-400'>A four-digit code has been sent to your email name@frontendpro.dev.</span>
            <span className='text-gray-400'>Please enter the code below to verify your email address.</span>
            <form className='mt-14 flex justify-between gap-8'>
                {code.map((c,idx)=>(
                    <input type="text"
                    style={{
                        borderColor:borderStyle
                    }} 
                    key={idx}
                    ref={e=>inputRefs.current[idx]=e}
                    value={c}
                    maxLength={1}
                    onChange={e=>handleChange(e.target.value,idx)}
                    onKeyDown={e=>handleKeyDown(e,idx)}
                    className={inputStyle}
                    placeholder='0'
                    />
                ))}
            </form>
            <div className='mt-14 h-18'>
                <div className='bg-[#2e3650] rounded-lg'>
                    <button className='bg-[#1a2036] px-40 py-4 rounded-lg 
                    text-white cursor-pointer mb-2 hover:mb-1 transition-all duration-100'
                    onClick={handleClick}>Verify OTP</button>
                </div>
            </div>
        </div>
    )
}

export default App
