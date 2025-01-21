import React from 'react'

const CategoryTabItem = ({title,icon,id,isActive,handleTabCategory}:{handleTabCategory:(id:string)=>void,id:string,isActive:boolean,title:string,icon:React.ReactNode}) => {
  return (
    <div onClick={()=>handleTabCategory(id)} id={id} className='relative p-2'>
      <div className={`flex flex-col gap-1 items-center text-sm ${isActive ?'font-[700] dark:font-[500] opacity-100 stroke-2':'opacity-95 *:stroke-1 font-[500] dark:font-[200]'} transition-all`}>
         {icon} {title}
      </div>
       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ${isActive ?'w-full':'w-0'} transition-all h-[3px] dark:bg-white bg-black rounded-2xl `} />
    </div>
  )
}

export default CategoryTabItem