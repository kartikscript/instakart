import CartStatusLine from '@/components/CartStatusLine'
import ProductCard from '@/components/ProductCard'
import { useGlobalContext } from '@/context/GlobalContext'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cart')({
  component: RouteComponent,
})

function RouteComponent() {

  const {cartItems} = useGlobalContext()
  return (
    <div className='h-screen relative'>
       <CartStatusLine/>
       <div className='p-4 space-y-3'>
        {
          cartItems[0] ? cartItems.map(item =>{
          return (<ProductCard key={item.id} data={item} viewAsCartProd={true}/>
          )
          })
          :
          (<p className='text-center'>No Items in Cart !</p>)
        }

       </div>
      </div>
  )
}
