import { Input } from '@/components/ui/input'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Search } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
})

function RouteComponent() {
  const [searchInput, setSearchInput] = useState('')

  const checkKeyChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Search results', searchInput)
    }
  }
  return (
    <div className='p-3 pt-5'>
      <header className="sticky top-0 left-0 flex items-center gap-2">
        <Link to='/'><ArrowLeft className='size-8 stroke-1'/></Link>
        <div className=' w-full flex px-3 py-2 items-center bg-white dark:bg-black rounded-md border-2 border-main dark:border-dark-main'>
          <label htmlFor="search-main">
            <Search className="text-main" />
          </label>
          <Input
            autoFocus
            id="search-main"
            placeholder="Search Products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => checkKeyChange(e)}
            className="focus-visible:ring-0 focus-visible:outline-none border-none px-2 py-0 shadow-none"
          />
        </div>
      </header>
    </div>
  )
}
