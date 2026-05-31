import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <Card />
    </>
  )

}

function Card() {
  const faqs = [
    {
      id: 1,
      question: "Can I use FrontendPro to prepare for a frontend job interview?",
      response:
        "Yes, absolutely. FrontendPro offers real-world challenges that reflect common frontend interview tasks, helping you build practical skills and confidence.",
      color: "#fb923c",
      bgColor: "#ffedd5",
    },
    {
      id: 2,
      question:
        "Do I need to have experience in frontend dev to use FrontendPro?",
      response:
        "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there’s something for everyone.",
      color: "#8f8cf9",
      bgColor: "#e0e7ff",
    },
    {
      id: 3,
      question: "How often are new challenges added to FrontendPro?",
      response:
        "We add new challenges every week, ensuring fresh content and continuous learning opportunities.",
      color: "#8f8cf9",
      bgColor: "#e0e7ff",
    },
    {
      id: 4,
      question:
        "What kind of frontend challenges can I expect to find on FrontendPro?",
      response:
        "You'll find a variety of challenges including building UI components, implementing responsive designs, working with APIs, and solving JavaScript logic problems.",
      color: "#f472b6",
      bgColor: "#fce7f3",
    },
    {
      id: 5,
      question: "Can I use libraries/frameworks on these projects?",
      response:
        "Yes, you're free to use any libraries or frameworks you prefer, such as React, Vue, or Angular, unless a specific challenge restricts them for learning purposes.",
      color: "#4ade80",
      bgColor: "#f0fdf4",
    },
  ]

  const [openOps,setOpenOps] = useState(-1)


  return (
    <div className='shadow-md rounded-xl w-fit mx-auto mt-20 text-lg px-16 py-8 flex flex-col gap-1 items-center'>
      <h2 className='font-bold text-2xl'>Frequently Asked Questions</h2>
      <span className='w-3/7 text-center text-sm'>Answers to common questions about our frontend challenges website.</span>
      <ul className='mt-6 flex flex-col gap-6 w-150 text-sm'>
        {faqs.map(faq=>(
          <Item key={faq.id} {...faq} open={openOps===faq.id} onChoose={()=>setOpenOps(faq.id===openOps?-1:faq.id)}/>
        ))}  
      </ul>
    </div>
  )
}

function Item({question,response,color,bgColor,open,onChoose}) {

  return (
    <li className='border-l-4 p-2'
    style={{borderLeftColor:color,backgroundColor:bgColor}}>
      <div className={`flex justify-between gap-12 items-center`}>
        <span className={`${open ? 'font-bold' : ''}`}>{question}</span> 
        <button onClick={onChoose}
          className='text-3xl cursor-pointer' >{open ? 'x' : '+'}</button>
      </div>
      <div className={`overflow-hidden grid ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-all duration-200`}>
        <span className='min-h-0'>{response}</span>
      </div>
    </li>
  )
}


export default App
