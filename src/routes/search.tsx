import ProductCard from '@/components/ProductCard'
import { Input } from '@/components/ui/input'
import { Product } from '@/lib/types'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Search } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
})

function RouteComponent() {
  const [searchInput, setSearchInput] = useState('')
  const [prodData, setProdData] = useState<Product[]>([])
  const checkKeyChange = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const req = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`)
      const searchData = await req.json()
      setProdData(searchData.products)
    }
  }
  return (
    <div className='h-screen flex flex-col overflow-y-auto'>
      <header className="p-3 pt-5 sticky top-0 left-0 flex items-center gap-2 bg-main-50 dark:bg-dark-main-50">
        <Link to='/'><ArrowLeft className='size-8 stroke-1'/></Link>
        <div className=' w-full flex p-2 items-center bg-white dark:bg-black rounded-md border-2 border-main dark:border-dark-main'>
          <label htmlFor="search-main">
            <Search className="text-main" />
          </label>
          <Input
            autoFocus
            id="search-main"
            inputMode='search'
            placeholder="Search Products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => checkKeyChange(e)}
            className="focus-visible:ring-0 focus-visible:outline-none border-none px-2 py-0 shadow-none"
          />
        </div>
      </header>
      <section className='flex-1 space-y-4 p-3'>
        {
          prodData[0] ?prodData?.map(item =>(<ProductCard key={item.id} data={item} viewAsCartProd/>)) :
          <div className='flex flex-col gap-4 items-center justify-center h-full tracking-wider'>
            <Search className='size-20 text-black/30 dark:text-neutral-500'/>
            <p className='text-center '>Searches will appear here</p>
          </div>
        }
      </section>
    </div>
  )
}
