import HeadImg from '@/assets/1.jpg'
import Avatar from '@/assets/avatar.jpg'
import './App.css'

function App() {
  return (
    <>
      <Card/>
    </>
  )
}

function Card() {
  return (
    <div className='mx-auto bg-white w-90 mt-20 rounded-xl shadow-xl overflow-hidden hover:scale-101 hover:shadow-2xl cursor-pointer transition-all duration-300 easy-out'>
      <img src={HeadImg} className='w-full h-60 object-cover' />
      <div className='w-full p-6'>
        <span className='bg-[#f97316] p-1 px-3 rounded-full text-white text-sm'>TECHNOLOGY</span>
        <h2 className='mt-2.5 font-bold text-xl'>How I Built Web Development Challenges Website</h2>
        <p className='mt-4 text-lg'>If you're looking for inspiration to build your own side project...</p>
      </div>
      <div className='p-6 flex items-center gap-2'>
        <img src={Avatar} alt="Corey Lubin" className='w-15 h-15 object-cover rounded-full' />
        <div>
          <h3 className='font-bold'>Corey Lubin</h3>
          <span className='text-gray-500'>4h ago</span>
        </div>
      </div>
    </div>
  )
}

export default App
