import ProductCard from './ProductCard'
import { Product } from '@/lib/types'

// const RenderProducts = ({label}:{label:string}) => {
//   if(label === 'Top Products'){
//    return <p>hell</p>
//   }
// }

const FeaturedSection = ({label,data}:{label:string,data:Product[]}) => {

  
  return (
    <section className='py-2 *:p-3'>
      <h2 className='text-xl font-black dark:font-bold tracking-wide '>{label}</h2>
      <div className='flex items-stretch gap-4 overflow-x-scroll whitespace-nowrap remove-scrollbar '>
        {
          data?.map((product:Product)=>{
                          return <ProductCard key={product.id} data={product}/>
                        })
        }
      </div>
    </section>
  )
}

export default FeaturedSection