import { useState } from 'react'
import { ModeToggle } from './components/mode-toggle'
import { Input } from './components/ui/input'
// import { Button } from './components/ui/button'
// import { useToast } from './hooks/use-toast'
import CategoryTabItem from './components/CategoryTabItem'
import { Baby, BookHeart, Heart, Search, ShoppingBag, ShoppingCart, WashingMachine } from 'lucide-react'
import FeaturedSection from './components/FeaturedSection'
import { Link } from '@tanstack/react-router'
import { Product } from './lib/types'
import { useGlobalContext } from './context/GlobalContext'
import { Button } from './components/ui/button'

const tabItems = [
  { id:'1',icon: <ShoppingBag/>, title: 'All' },
  { id:'2',icon: <BookHeart/>, title: 'Weddings' },
  { id:'3',icon: <WashingMachine/>, title: 'Electronics' },
  { id:'4',icon: <Heart/>, title: 'Beauty' },
  { id:'5',icon: <Baby/>, title: 'Kids' },
  { id:'6',icon: <WashingMachine/>, title: 'Electronics' },
  { id:'7',icon: <Heart/>, title: 'Beauty' },
  { id:'8',icon: <Baby/>, title: 'Kids' },
]


 function App() {
  const [activeTabId, setActiveTabId] = useState('1')
 // const { toast } = useToast()
  const {data,cartItems} = useGlobalContext()

const catWiseData: {
  beautyProd: Product[];
  fragrancesProd: Product[];
  furnitureProd: Product[];
  groceriesProd: Product[];
} = {
  beautyProd: [],
  fragrancesProd: [],
  furnitureProd: [],
  groceriesProd: [],
};

data?.forEach((prod)=>{
     if(prod.category === 'beauty') {
       catWiseData.beautyProd.push(prod)
      }else if(prod.category === 'fragrances'){
        catWiseData.fragrancesProd.push(prod)
      }else if(prod.category === 'furniture'){
        catWiseData.furnitureProd.push(prod)
      }else if(prod.category === 'groceries'){
        catWiseData.groceriesProd.push(prod)
      }
  })

const handleTabCategory = (id:string) => {

  setActiveTabId(id)
}

return (
    <div className=' min-h-screen dark:bg-black bg-white'> 
      <header className='sticky top-0 left-0 grid grid-cols-[auto_1fr_auto] place-items-center justify-items-start gap-y-2 sm:gap-y-8 sm:gap-x-10 p-3 sm:p-5 dark:bg-dark-main-50 bg-main-50 '>
        <h1 className='col-span-2 sm:col-span-1 font-mono tracking-widest uppercase font-semibold text-xl sm:text-2xl '>Instakart</h1>
        <div className=' col-span-1 sm:col-start-3 flex items-center gap-6'>
          <span className='hidden relative sm:flex items-center font-semibold text-white bg-main dark:bg-dark-main rounded-md px-4 py-2 gap-1'>
           <ShoppingCart/>
           <h3>Cart</h3>
           {cartItems.length !== 0 && <span className='absolute top-0 right-0  translate-x-[35%] -translate-y-[35%] rounded-sm font-medium py-[2px] px-2 flex justify-center items-center text-[10px] bg-green text-white bg-main border border-main-50 dark:border-dark-main-50 dark:bg-dark-main'>{cartItems.length}</span>}
          </span>
          <Button variant={'outline'} className='dark:bg-black hidden sm:block' >Sign In</Button>
          <ModeToggle/>
        </div>
        <Link to='/search'
        className="col-span-full sm:col-span-1 sm:col-start-2 sm:row-start-1  w-full flex px-2 sm:py-1 items-center bg-white dark:bg-black rounded-md border-2 border-main dark:border-dark-main "
        >
          <label><Search className="text-main size-5" /></label>
          <Input
            placeholder="Search Products..."
            className="focus-visible:ring-0 focus-visible:outline-none border-none px-2 py-0 shadow-none" 
          />
        </Link>
        <div className='col-span-full flex w-full sm:justify-center gap-4 sm:gap-8 overflow-x-scroll overflow-y-hidden remove-scrollbar'>
          {
            tabItems.map((item,index) => {
              const isActiveId = activeTabId === item.id
              return <CategoryTabItem handleTabCategory={handleTabCategory} isActive={isActiveId} id={item.id} key={index} title={item.title} icon={item.icon} />
            }
            )
          }
        </div>
      </header> 
   
      <div className='min-h-screen max-w-screen-2xl mx-auto'>
        <FeaturedSection data={catWiseData.beautyProd} label='Glow Essentials'/>
        <FeaturedSection data={catWiseData.fragrancesProd} label='Signature Scents'/>
        <FeaturedSection data={catWiseData.furnitureProd} label='Comfort & Class'/>
        <FeaturedSection data={catWiseData.groceriesProd} label='Daily Essentials'/>
      
      </div>
    </div>
  )
}

export default App
