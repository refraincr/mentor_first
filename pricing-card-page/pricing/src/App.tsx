import { useState } from 'react'
import './App.css'
import { FaChevronDown } from "react-icons/fa";

interface planType {
  plan:string;
  price:string;
  billingPeriod: string | null;
  monthlyActiveUsers: string;
  features:string[];
  cta: string;
}

function App() {

  const [ month,setMonth ] = useState(true)

  const plans = [
  {
    "plan": "Starter",
    "price": "$19",
    "billingPeriod": null,
    "monthlyActiveUsers": "500",
    "features": [
      "3 projects",
      "Unlimited guides",
      "Unlimited flows",
      "Unlimited branded themes",
      "Email support"
    ],
    "cta": "Choose Plan"
  },
  {
    "plan": "Pro",
    "price": "$99",
    "billingPeriod": "month",
    "monthlyActiveUsers": "2500",
    "features": [
      "All starter features, plus:",
      "Unlimited projects",
      "Unlimited fully customizable themes",
      "A dedicated Customer Success Manager",
    ],
    "cta": "Choose Plan"
  },
  {
    "plan": "Enterprise",
    "price": "Let's Talk!",
    "billingPeriod": null,
    "monthlyActiveUsers": "Unlimited",
    "features": [
      "All Pro features",
      "Dedicated environment",
      "Enterprise account administration",
      "Premium support and services",
    ],
    "cta": "Contact Us"
  }
] 

  return (
    <div>
      <div className='bg-[#bc1e4a] w-full min-w-80 rounded-b-xl flex flex-col items-center py-6 text-white
       md:w-100 mx-auto'>
        <span>Your current plan:</span>
        <h2 className='font-bold text-lg'>Starter Trial · 500 MAUs</h2>
      </div>
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-3xl font-bold'>Choose a plan</h1>
        <div className='mt-4 flex items-center gap-2 '>
          <span>Billed monthly</span>
          <button className={`bg-[#bc1e4a] rounded-full w-16 p-1 cursor-pointer`}
            onClick={()=>setMonth(!month)}
            >
            <i className={`block bg-white w-6 h-6 rounded-full transition-all duration-300 
              ${month ? '' : 'translate-x-8'}`}></i>
          </button>
          <span>Billed annually</span>
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-4 mt-10 lg:flex-row lg:justify-center lg:gap-6'>
        {plans.map(p=><Card key={p.plan} plan={p} month={month} />)}
      </div>
    </div>
  )
}

function Card({plan,month}:{plan:planType,month:boolean}) {

  // 价格
  function getAmount() {
    const price = plan.price
    if (/\d+/.test(price.slice(1)) && !month) {
      // 具体价格且是年价格
      return '$' + Number(price.slice(1)) * 12
    }
    return price
  }

  // MAUs
  function getMAUs() {
    const maus = plan.monthlyActiveUsers
    if (/\d+/.test(maus) && !month) return Number(maus)*12
    return maus
  }


  return (
    <div className='bg-[#22262c] w-90 h-130 rounded-lg flex flex-col items-center justify-between py-8'>
      <div>
        <h2 className='text-2xl text-center'>{plan.plan}</h2>
        <h1 className='text-4xl font-bold mt-4'>
          {getAmount()}
          {plan.billingPeriod && <span className='text-2xl'> / {month ? 'month' : 'year'}</span>}
        </h1>
      </div>
      {plan.billingPeriod && (
        <>
          <div className='border border-[#43464c] w-4/5 py-5 px-12 flex justify-between items-center text-xl mt-7'>
            <span>{month?plan.monthlyActiveUsers:Number(plan.monthlyActiveUsers)*12} MAUs</span> 
            <FaChevronDown className='text-[#5c6268]' />
          </div>
          <span className='text-red-900 text-sm -ml-20 mt-2'>{month ? 'Monthly' : 'yearly'} active users</span>
        </>
      )}
      <div className='w-4/5 flex flex-col jsutify-center items-center mt-3'>
        <ul className='w-full flex flex-col gap-2'>
        {!plan.billingPeriod && 
        <li>
          <span className='text-red-900 mr-2 font-bold text-xl'>•</span>{getMAUs()} MAUs
        </li>}
        {plan.features.map(
          (f,idx)=> <li key={f} className='text-sm'>
                <span className='text-red-900 mr-2 font-bold text-xl'>•</span>{idx===0 && !month && plan.plan==='Starter' ? '36 projects' : f}
              </li>
        )}
      </ul>
      <button className='border border-[#bc1e4a] rounded-sm py-4 hover:bg-[#bc1e4a] cursor-pointer w-4/7 mt-4'>{plan.cta}</button>
      </div>
    </div>
  )
}

export default App
