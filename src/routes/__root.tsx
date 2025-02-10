import MobileNav from '@/components/MobileNav'
import { GlobalProvider } from '@/context/GlobalContext';
import { createRootRoute, Outlet, useMatchRoute} from '@tanstack/react-router'
// import { useEffect } from 'react';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => {
    const matchRoute = useMatchRoute();
    const isSearchRoute = matchRoute({ to: '/search' });
    const isLoginRoute = matchRoute({ to: '/login' });

    // useEffect(()=>{
    //   const checkUserAuth=async ()=>{
    //     try {
    //       const res = await fetch("http://localhost:5000/api/user/profile",{method:'GET',credentials:'include',headers:{"Cache-Control":"no-cache"}})
    //       console.log('api hit',res)
          
    //     } catch (error) {
    //         console.log('fetch not performed')
    //     }
    //   }
    //   checkUserAuth()
    // },[])
   return (<>
      <GlobalProvider>
       <Outlet/>

      {!isSearchRoute && !isLoginRoute && <MobileNav />}
      </GlobalProvider>
      {/* <TanStackRouterDevtools /> */}

    </>)
  },
})