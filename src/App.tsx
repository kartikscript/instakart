import { useState } from 'react'
import { ModeToggle } from './components/mode-toggle'
import { Input } from './components/ui/input'
// import { Button } from './components/ui/button'
// import { useToast } from './hooks/use-toast'
import CategoryTabItem from './components/CategoryTabItem'
import { Baby, BookHeart, Heart, Search, ShoppingBag, WashingMachine } from 'lucide-react'

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
  const [searchInput, setSearchInput] = useState('')
  // const { toast } = useToast()

  const handleTabCategory = (id:string) => {

    setActiveTabId(id)
  }

  const checkKeyChange = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      console.log('Search results',searchInput)
    } 
    
  }
  return (
    <div className=' min-h-screen dark:bg-black bg-white'> 
      <header className='p-3 space-y-3 dark:bg-dark-main-50 bg-main-50'>
        <h1 className='font-mono font-semibold text-2xl flex justify-between'>Instakart <ModeToggle/></h1>
        <div
        className="flex px-3 items-center bg-white dark:bg-black rounded-md border border-main dark:border-dark-main "
        >
          <label htmlFor='search-main'><Search className="text-main" /></label>
          <Input
            id="search-main"
            placeholder="Search Products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => checkKeyChange(e)}
            className="focus-visible:ring-0 focus-visible:outline-none border-none px-2"
          />
        </div>
        <div className='flex w-full gap-4 overflow-x-scroll overflow-y-hidden'>
          {
            tabItems.map((item,index) => {
              const isActiveId = activeTabId === item.id
              return <CategoryTabItem handleTabCategory={handleTabCategory} isActive={isActiveId} id={item.id} key={index} title={item.title} icon={item.icon} />
            }
            )
          }
        </div>
      </header> 
    {/* <ModeToggle />  
    
    <Button className=''
       onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
          duration: 5000,
        })
      }}
    >Click</Button>
    <Input placeholder='email' type='email'/> */}
   
    <div className='h-screen '>

    </div>
    </div>
  )
}

export default App
