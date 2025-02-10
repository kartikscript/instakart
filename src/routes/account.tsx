import { createFileRoute, Link } from '@tanstack/react-router'
import { User } from 'lucide-react'

export const Route = createFileRoute('/account')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className='h-[92vh] bg-grey-50 dark:bg-dark-grey-50'>
   <div className='w-full p-4 text-lg font-medium  bg-white dark:bg-black '>
     <h2>My Profile</h2>
   </div>
   <div className='flex flex-col gap-4 items-center justify-center h-full'>
            <User className='size-20 text-black/30 dark:text-neutral-500'/>
            <h1 className='text-2xl font-medium'>Your have not logged in !</h1>
            <Link to='/login' className='px-4 py-2 font-medium rounded-lg bg-main text-main-50 dark:bg-dark-main dark:text-dark-main-50'>Log-in</Link>
          </div>
  </div>

)
}
