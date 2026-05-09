function Card({content}) {
    return (
        <>
            <div
            className="bg-gray8 w-120 p-10 rounded-xl flex flex-col my-100 mx-auto gap-10"
            >
                <img src={content.avatar} alt={content.title} 
                className="w-30 h-30 rounded-full mx-auto"
                />
                <div className="flex flex-col gap-3 items-center">
                    <h2 className="text-3xl text-White font-bold">{content.title}</h2>
                    <h3 className="text-lg text-Green font-semibold">{content.subtitle}</h3>
                </div>
                <span 
                className="text-center text-lg text-gray-300"
                >{content.base}</span>
                <ul
                className="flex flex-col gap-6"
                >
                    {content.links.map((l,idx)=>
                        <li key={idx}><a href=""
                        className="block bg-gray7 text-lg font-semibold text-White py-4 rounded-lg hover:bg-Green hover:text-black text-center"
                        >{l}</a></li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Card