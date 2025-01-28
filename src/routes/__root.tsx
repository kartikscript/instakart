import MobileNav from '@/components/MobileNav'
import { GlobalProvider } from '@/context/GlobalContext';
import { createRootRoute, Outlet, useMatchRoute} from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => {
    const matchRoute = useMatchRoute();
    const isSearchRoute = matchRoute({ to: '/search' });
   return (<>
      <GlobalProvider>
       <Outlet/>

      </GlobalProvider>
      {/* <TanStackRouterDevtools /> */}
      {!isSearchRoute && <MobileNav />}

    </>)
  },
})