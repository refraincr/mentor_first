// 图标
import { GoShieldCheck } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import { FiInfo } from "react-icons/fi";

export default function Advantages() {
    const data = [
        {
            icon:<GoShieldCheck className="size-16 text-yellow-500" />,
            title:'Strong Security',
            content:'Secure transaction and record information with 2-factor authentication (2FA)'
        },
        {
            icon:<CiWallet className="size-16 text-yellow-500" />,
            title:'Payment Options',
            content:'Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer'
        },
        {
            icon:<FiInfo className="size-16 text-yellow-500" />,
            title:'Market Updated',
            content:'The most accurate and trusted source for market cap, valuation, and cryptocurrency information'
        },
    ]
    return (
        <div className="w-4/5 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((d,idx)=><Card key={idx} data={d} />)}
        </div>
    )
}

function Card({data}) {
    return (
        <div className="bg-linear-to-b from-gray-300 to-gray-700 w-75 p-0.5 rounded-xl xl:w-85">
            <div className="w-full h-full bg-[#16171d] rounded-xl p-10 flex flex-col gap-3 items-center xl:gap-6">
                <div className="mb-6 mt-4">{data.icon}</div>
                <h2 className="text-white text-2xl">{data.title}</h2>
                <p className="text-gray-500 text-center">{data.content}</p>
            </div>
        </div>
    )
}