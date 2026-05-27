export default function Nav() {

    const linkStyle = `cursor-pointer hover:text-white transition`

    return (
        <div className="w-4/5 mx-auto flex pt-10">
            <h2 className="flex-1 text-3xl font-bold flex">
                <span className="text-white cursor-pointer">Send</span>
                <span className="text-yellow-300 cursor-pointer">Crypt</span>
            </h2>
            <ul className="flex-6 flex text-gray-500 gap-8 px-8 items-center">
                <li className={linkStyle}>Markets</li>
                <li className={linkStyle}>Portfolio</li>
                <li className={linkStyle}>Products</li>
            </ul>
            <button className="flex-1 bg-yellow-300 px-6 py-3 rounded-xl cursor-pointer">Connect Wallet</button>
        </div>
    )
}