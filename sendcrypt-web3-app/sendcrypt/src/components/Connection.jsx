import WebImg from '@/assets/web-img.png'

export default function Connection() {
    return (
        <div className="w-4/5 mx-auto flex justify-between">
            <div className='flex flex-col gap-3 text-white justify-center items-start'>
                <h1 className='text-5xl font-bold'>Start Sending Crypto</h1>
                <h1 className='text-5xl font-bold'>Currency Easily</h1>
                <span className='text-gray-600' >Join the world largest crypto exchange</span>
                <button className="mt-4 text-black bg-yellow-300 px-6 py-3 rounded-xl cursor-pointer">Connect Wallet</button>
            </div>
            <img src={WebImg} className='w-120 h-120 -mr-30' />
        </div>
    )
}