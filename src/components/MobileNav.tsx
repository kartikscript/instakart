import { Link } from '@tanstack/react-router'
import { Home, LayoutGrid, ShoppingCart, User } from 'lucide-react'


const navLinks = [
  {
    label: 'Home',
    icon: <Home/>,
    route:'/'
  },
  {
    label: 'Categories',
    icon: <LayoutGrid/>,
    route:'/categories'
  },
  {
    label: 'Account',
    icon: <User/>,
    route:'/account'
  },
  {
    label: 'Cart',
    icon: <ShoppingCart/>,
    route:'/cart'
  }
]
const MobileNav = () => {

  return (
    <nav className='fixed bottom-0 left-0 w-full flex justify-between items-center bg-white dark:bg-black border-t border-grey-50 dark:border-dark-grey-50 '>
      {
        navLinks.map((link,index) => (
          <Link key={index} to={link.route} className='flex-1 py-3 gap-1 flex flex-col items-center text-sm  active:bg-grey-100 dark:active:bg-dark-grey-50 [&.active]:text-main [&.active]:dark:text-dark-main [&.active]:font-bold font-medium text-grey-150 dark:text-dark-grey-150 transition-all duration-200 '>
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))
      }
    </nav>
  )
}

export default MobileNav