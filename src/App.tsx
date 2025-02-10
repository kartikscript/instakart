import { useState } from 'react'
import { ModeToggle } from './components/mode-toggle'
import { Input } from './components/ui/input'
// import { Button } from './components/ui/button'
// import { useToast } from './hooks/use-toast'
import CategoryTabItem from './components/CategoryTabItem'
import { Baby, BookHeart, Heart, Search, ShoppingBag, WashingMachine } from 'lucide-react'
import FeaturedSection from './components/FeaturedSection'
import { Link } from '@tanstack/react-router'
import { Product } from './lib/types'
import { useGlobalContext } from './context/GlobalContext'

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
  const {data} = useGlobalContext()

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

console.log(data)
return (
    <div className=' min-h-screen dark:bg-black bg-white'> 
      <header className='sticky top-0 left-0 p-3 space-y-3 dark:bg-dark-main-50 bg-main-50'>
        <h1 className='font-mono tracking-widest uppercase font-semibold text-2xl flex justify-between'>Instakart <ModeToggle/></h1>
        <Link to='/search'
        className="flex px-2 py-1 items-center bg-white dark:bg-black rounded-md border-2 border-main dark:border-dark-main "
        >
          <label><Search className="text-main" /></label>
          <Input
            placeholder="Search Products..."
            className="focus-visible:ring-0 focus-visible:outline-none border-none px-2 py-0 shadow-none" 
          />
        </Link>
        <div className='flex w-full gap-4 overflow-x-scroll overflow-y-hidden remove-scrollbar'>
          {
            tabItems.map((item,index) => {
              const isActiveId = activeTabId === item.id
              return <CategoryTabItem handleTabCategory={handleTabCategory} isActive={isActiveId} id={item.id} key={index} title={item.title} icon={item.icon} />
            }
            )
          }
        </div>
      </header> 
   
      <div className='min-h-screen '>
        <FeaturedSection data={catWiseData.beautyProd} label='Glow Essentials'/>
        <FeaturedSection data={catWiseData.fragrancesProd} label='Signature Scents'/>
        <FeaturedSection data={catWiseData.furnitureProd} label='Comfort & Class'/>
        <FeaturedSection data={catWiseData.groceriesProd} label='Daily Essentials'/>
      
      </div>
    </div>
  )
}

export default App
