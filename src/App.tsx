import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ModeToggle } from './components/mode-toggle'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { useToast } from './hooks/use-toast'

function App() {
  const [count, setCount] = useState(0)
  const { toast } = useToast()
  return (
    <header className='w-fit min-h-screen text-center'>  
    <ModeToggle />
    
    <Input placeholder='email' type='email'/>
    <Button className=''
       onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
          duration: 5000,
        })
      }}
    >Click</Button>
    </header>
  )
}

export default App
