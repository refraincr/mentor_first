function Card({info}) {
  // 指定默认值
  const {
    img="",
    tags=[],
    date="",
    title="",
    content="",
    avatar="",
    author=""
  } = info || {}
  return (
    <>
      <div className="bg-white mt-20 w-65 mx-auto p-6 rounded-2xl border shadow-3xl grid grid-cols-1 gap-4 sm:w-75 md:w-85">
        {/* 图片 */}
        <img src={img} alt="image" className="w-full h-auto rounded-2xl" />
        {/* 标签 */}
        <div className="flex">
          {tags.map((t,index)=>
            <span 
              className="bg-brand-yellow rounded-sm px-3 py-1 font-bold"
              key={`${t}-${index}`} >{t}</span>
          )}
        </div>
        {/* 日期 */}
        <p className="text-sm">{date}</p>
        {/* 标题 */}
        <a className="font-bold text-xl cursor-pointer hover:text-brand-yellow">{title}</a>
        {/* 内容 */}
        <p className="text-sm text-gray-600">{content}</p>
        {/* 用户图像&用户名 */}
        <div className="flex gap-4 items-center">
          <img src={avatar} alt={author} 
          className="w-8 h-8 rounded-full"/>
          <span className="font-bold text-sm">{author}</span>
        </div>
      </div>
    </>
  )
}


export default Card