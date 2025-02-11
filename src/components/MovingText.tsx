
const MovingText = ({isReverse, texts}:{isReverse?:boolean, texts:string[]}) => {

  // const texdts=['Logic Building','UI/UX','Optimized Codes','API','Performance']
  return (
    <div className={`flex tracking-wider  ${isReverse && '*:direction-reverse'} relative z-0 py-2 sm:py-4 *:px-3 lg:*:py-6  *:*:bg-grey-50 dark:*:*:bg-dark-grey-50 *:*:rounded-md *:*:p-3  whitespace-nowrap overflow-hidden`}>
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