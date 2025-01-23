import { useState } from 'react'
import { ModeToggle } from './components/mode-toggle'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { useToast } from './hooks/use-toast'
import CategoryTabItem from './components/CategoryTabItem'
import { Baby, BookHeart, Heart, ShoppingBag, WashingMachine } from 'lucide-react'

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
  const { toast } = useToast()

  const handleTabCategory = (id:string) => {

    setActiveTabId(id)
  }
  return (
    <div className='p-3 mx-auto min-h-screen text-center flex gap-2 flex-col items-center '>  
    <ModeToggle />  
    
    <Button className=''
       onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
          duration: 5000,
        })
      }}
    >Click</Button>
    <Input placeholder='email' type='email'/>
    <header className='flex w-full gap-4 overflow-x-scroll overflow-y-hidden'>
      {
        tabItems.map((item,index) => {
          const isActiveId = activeTabId === item.id
          return <CategoryTabItem handleTabCategory={handleTabCategory} isActive={isActiveId} id={item.id} key={index} title={item.title} icon={item.icon} />
        }
        )
      }
    </header>
    </div>
  )
}

export default App
