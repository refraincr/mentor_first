export default function Modal() {
    return (
        <div className="bg-deeppurple w-3/5 rounded-2xl text-white p-6 px-12
         flex flex-col gap-10 items-center relative
         fixed z-20 left-1/5 top-40">
            <button className="absolute right-6 text-2xl hover:cursor-pointer">X</button>
            <h2
            className="mt-15 w-5/6 text-3xl text-center"
            >How likely are you to recommend FrontendPro to someone you know?</h2>
            <div className="w-full">
                <div
                className="flex w-full justify-between"
                >
                    {Array(10).fill().map((_,idx)=>(
                        <button key={idx}
                        className="bg-btnbg w-14 h-14 rounded-lg border-btnborderbg border-2 text-2xl text-gray-300 font-medium
                         translate-all duration-200 easy-out hover:scale-95 hover:cursor-pointer hover:border-white"
                        >{idx+1}</button>
                    ))}
                </div>
                <div className="mt-4 flex justify-between text-xs text-gray-400">
                    <span>Not likely at all</span>
                    <span>Extremely likely</span>
                </div>
            </div>
            <div className="w-full flex justify-between text-lg">
                <button
                className="border-2 border-blue-500 px-11 py-2 rounded-sm
                 hover:cursor-pointer"
                >Cancel</button>
                <button
                className="border-2 border-blue-500 px-11 py-2 rounded-sm
                 bg-blue-500 hover:cursor-pointer"
                >Submit</button>
            </div>
        </div>
    )
}