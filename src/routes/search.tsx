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
    <div className=''>
      <header className="p-3 pt-5 sticky top-0 left-0 flex items-center gap-2 bg-black">
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
      <section className='space-y-4 p-3'>
        {
          prodData[0] ?prodData?.map(item =>(<ProductCard key={item.id} data={item} viewAsCartProd/>)) :
          <p className='text-center '>Searches will appear here</p>
        }
      </section>
    </div>
  )
}
