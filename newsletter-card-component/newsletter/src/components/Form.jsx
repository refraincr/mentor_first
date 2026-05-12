import { content } from '@/data/data'
import { useState } from 'react'

function Form() {
    const [ email,setEmail ] = useState('')
    const [ agree,setAgree ] = useState(false)

    // 验证邮箱地址
    function validEmailAndAgree() {
        const reg = /^[0-9a-zA-Z_]+@\w+\.com$/
        if (!agree) {
            alert("Please agree items.")
            return
        }
        if (!reg.test(email)) {
            alert("Email error!")
            return
        }
        alert("Pass")
    }

    return (
        <div
        className='bg-white w-280 py-16 mx-auto my-100 rounded-xl shadow-3xl flex flex-col gap-6 items-center'
        >
            <h2
            className='text-4xl font-bold'
            >{content.title}</h2>
            <p className='block w-5/6 text-2xl text-center text-gray-600'>{content.main}</p>
            <form 
            className='flex flex-col items-center w-4/5 gap-4'
            >
                <div
                className='flex gap-10 w-full'
                >
                    <input 
                    type="text"
                    placeholder='Enter your email address'
                    className='flex-3 bg-input-bg outline-0 px-8 py-5 rounded-xl border-gray-300 border-2 placeholder:text-gray-400 placeholder:text-2xl text-2xl' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <button
                    className='flex-1 bg-black rounded-xl text-white text-2xl hover:cursor-pointer'
                    onClick={validEmailAndAgree}
                    >Subscribe</button>
                </div>
                <div
                className='w-full flex gap-5'
                >
                    <input 
                    type="checkbox" 
                    className='w-8 h-8'
                    checked={agree}
                    onClick={()=>setAgree(!agree)}
                    />
                    <p>{content.items}</p>
                </div>
            </form>
        </div>
    )
}

export default Form