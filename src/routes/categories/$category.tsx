import ProductCard from '@/components/ProductCard'
import { Product } from '@/lib/types'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/categories/$category')({
  component: RouteComponent,
  loader:async ({params})=>{
    const category = params.category
    const req = await fetch(`https://dummyjson.com/products/category/${category}`)
    const catData = await req.json()
    console.log(catData)
    return{
      categoryData:catData.products
    }
  },
})

function RouteComponent() {
  const {categoryData}:{categoryData : Product[]} = Route.useLoaderData()
  return (
    <section className='space-y-4 p-3 min-h-screen'>
      <Link to='/categories'><ArrowLeft/></Link>
      {
        categoryData?.map(item => <ProductCard key={item.id} data={item} viewAsCartProd/>)
      }
      
    </section>
  )
}
