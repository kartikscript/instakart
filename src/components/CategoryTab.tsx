import React from 'react'

const CategoryTab = ({title,icon,id,isActive,handleTabCategory}:{handleTabCategory:(id:string)=>void,id:string,isActive:boolean,title:string,icon:React.ReactNode}) => {
  return (
    <div onClick={()=>handleTabCategory(id)} id={id} className='relative p-2'>
      <div className={`flex flex-col gap-1 items-center *:size-5  text-xs ${isActive ?'font-[400] opacity-100 stroke-2':'opacity-95 *:stroke-1 font-[100]'}`}>
         {icon} {title}
      </div>
     {isActive && <div className='absolute bottom-0 left-0 translate-y-1/2 w-full h-[3px] bg-white rounded-2xl ' />}
    </div>
  )
}

export default CategoryTab