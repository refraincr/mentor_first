import './App.css'
import Modal from '@/components/Modal'
import { useState } from 'react'

function App() {
  const [ isShow,setIsShow ] = useState(false)

  function handleClose() {
    setIsShow(false)
  }
  return (
    <>
      <button 
      className='px-4 py-1 m-10 border-2 rounded-md bg-yellow-300 border-yellow-600 cursor-pointer hover:scale-95 transition-all ease-out z-10'
      onClick={()=>setIsShow(true)}
      >show</button>
      { isShow && <Modal onClose={handleClose} /> }
    </>
  )
}

export default App
