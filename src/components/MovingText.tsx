
const MovingText = ({isReverse, texts}:{isReverse?:boolean, texts:string[]}) => {

  // const texdts=['Logic Building','UI/UX','Optimized Codes','API','Performance']
  return (
    <div className={`*:inline-flex tracking-wide font-light  ${isReverse && '*:direction-reverse'} relative z-0 text-sm  py-2 sm:py-4 lg:*:py-6 *:*:mx-6 *:*:bg-main-50 *:*:rounded-lg *:*:p-3  whitespace-nowrap overflow-hidden`}>
      <div className='animate-hor-move  flex justify-around items-center min-w-screen '>
        {
          texts.map((text,i)=>(<p key={i} className=''>{text}</p>))
        }
      </div>
      <div className='animate-hor-move  flex justify-around items-center min-w-screen'>
        {
          texts.map((text,i)=>(<p key={i}>{text}</p>))
        }
      </div>
    </div>
  )
}

export default MovingText