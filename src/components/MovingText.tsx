
const MovingText = ({isReverse, texts}:{isReverse?:boolean, texts:string[]}) => {

  // const texdts=['Logic Building','UI/UX','Optimized Codes','API','Performance']
  return (
    <div className={`flex tracking-wide font-light  ${isReverse && '*:direction-reverse'} relative z-0 text-sm  py-2 sm:py-4 *:px-3 lg:*:py-6  *:*:bg-main-50 *:*:rounded-lg *:*:p-3  whitespace-nowrap overflow-hidden`}>
      <div className='animate-hor-move gap-6 flex justify-between items-center min-w-screen '>
        {
          texts.map((text,i)=>(<p key={i} className=''>{text}</p>))
        }
      </div>
      <div className='animate-hor-move gap-6 flex justify-between items-center min-w-screen'>
        {
          texts.map((text,i)=>(<p key={i}>{text}</p>))
        }
      </div>
    </div>
  )
}

export default MovingText