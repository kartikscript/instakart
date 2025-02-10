import ProductCard from '@/components/ProductCard'
import { Product } from '@/lib/types'
import { createFileRoute } from '@tanstack/react-router'
import { ShoppingBag, ShoppingBasket } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/categories/')({
  component: RouteComponent,
  loader: async () => {
    const req = await fetch('https://dummyjson.com/products/category-list')
    const allCategories = await req.json()
    return { allCategories }
  },
})

function RouteComponent() {
  const { allCategories }: { allCategories: string[] } = Route.useLoaderData()

  const [catData, setCatData] = useState<Product[]>([])
  const [activeItem, setActiveItem] = useState('')
  const showCatProducts = async (category: string) => {
    const req = await fetch(`https://dummyjson.com/products/category/${category}`)
    const catData = await req.json()
    setCatData(catData.products)
    setActiveItem(category)
  }
  return (
    <div className=" grid grid-cols-[auto_1fr] h-[92vh] *:overflow-y-scroll *:remove-scrollbar">
      <section className='w-20 pl-1 space-y-3  bg-black/5  '>
        {allCategories?.map((item, i) => {
          const isActive = item === activeItem
          return (
            <div onClick={()=>showCatProducts(item)} key={i} className={`${isActive ? 'bg-white rounded-l-xl':'rounded-md'} relative w-full capitalize text-center tracking-wide text-[10px] font-medium flex flex-col items-center p-2   bg-grey-50 dark:bg-dark-grey-50`}>
              <div className='size-8 flex justify-center items-center bg-grey-50 dark:bg-dark-grey-50 rounded-md'>
                <ShoppingBasket/>
              </div>
              {item}
              {
                isActive &&(
                  <>
                    <div className='absolute top-0 right-0 -translate-y-full size-3 bg-white'>
                      <div className='size-full bg-black/5 rounded-br-full'/>
                    </div>
                    <div className='absolute bottom-0 right-0 translate-y-full size-3 bg-white'>
                      <div className='size-full bg-black/5 rounded-tr-full'/>
                    </div>
                  </>
                )
              }
            </div>
          )
        })}
      </section>
      <section >
        {
         catData[0] 
         ?(
          <main className='grid grid-cols-2 gap-2 px-2'>
            {
              catData?.map(item => <ProductCard key={item.id} data={item} />)
            }
          </main>
         ) 
         :
         (
            <div className='col-span-2  h-full flex flex-col items-center justify-center p-3 text-center'>
              <ShoppingBag className='size-20 stroke-1'/>
              <p className='text-lg font-semibold text-grey-150 dark:text-dark-grey-150'>Select a category to view<br/> products</p>
            </div>
         )
        }
      </section>
    </div>
  )
}
