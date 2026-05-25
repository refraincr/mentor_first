import './App.css'

// 头像
import Avatar from '@/assets/avatar.jpg'

function Profile() {
  return (
    <div
    className='w-220 flex justify-between gap-10 bg-linear-to-r from-white to-yellow-50 outline-12 rounded-xl outline-white
     mx-auto mt-30 py-10 hover:shadow-xl hover:-translate-y-0.5 transition-all'
    >
      {/* 头像 */}
      <div className='flex-1 flex flex-row-reverse'>
        <img src={Avatar} alt="头像" 
        className='w-50 h-50 rounded-full object-cover border-6 border-gray-200
         hover:scale-97 transition-all cursor-pointer'
        />
      </div>
      <div className='flex-2 flex flex-col gap-6'>
        {/* 文字区域 */}
        <div className='py-8 flex flex-col gap-2'>
          <h2 className='text-3xl font-bold'>John Deo</h2>
          <h3 className='text-2xl text-gray-600'>Frontend Developer</h3>
          <p className='text-xl'>Passionate frontend developer with expertise in HTML, CSS, JavaScript, and React.</p>
        </div>
        {/* 关注以及作品 */}
        <ul className='flex w-2/3 font-bold'>
          <li className='flex-1 border-r-2 text-center'>
            <div>1999</div>
            <span>Followers</span>
          </li>
          <li className='flex-1 border-r-2 text-center'>
            <div>190</div>
            <span>Following</span>
          </li>
          <li className='flex-1 text-center'>
            <div>15</div>
            <span>Projects</span>
          </li>
        </ul>
        {/* 功能区 */}
        <div>
          <button className='mr-4 border w-30 py-2 rounded-lg bg-blue-100 cursor-pointer'>Follow</button>
          <button className='border w-30 py-2 rounded-lg bg-yellow-100 cursor-pointer'>View Profile</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Profile />
    </>
  )
}

export default App
