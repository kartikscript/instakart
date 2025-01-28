
const allStatus = [
  {
    id:1,
    title:'Cart',
  },
  {
    id:2,
    title:'Address',
  },
  {
    id:3,
    title:'Review',
  },
  {
    id:4,
    title:'Payment',
  },
]
const CartStatusLine = () => {
  return (
    <div className='sticky top-0 left-0 h-20 px-14 flex items-center bg-white shadow-md dark:bg-dark-main-50 dark:shadow-dark-main-50 z-10'>
      <div className='w-full h-[1px] bg-grey-150 dark:bg-dark-grey-150 relative '>
        {
          allStatus.map((status,index) => {
            const leftPosition = `${(index/(allStatus.length - 1))*100}%`
            const active = index === 0 
            return (
              <div key={index} style={{left:leftPosition}} className='absolute bottom-1/2 -translate-x-1/2 translate-y-3/4 flex flex-col items-center tracking-wide font-medium text-grey-150'>
                <div className={`${active ? 'text-main-50 bg-main dark:text-dark-main-50 dark:bg-dark-main' :'text-grey-150 bg-white dark:text-dark-grey-150 dark:bg-black'} flex items-center justify-center w-6 h-6 rounded-full border border-grey-150 dark:border-dark-grey-150 text-xs `}>{status.id}</div>
                <p className={`${active && 'text-main dark:text-dark-main'} text-sm`}>{status.title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CartStatusLine