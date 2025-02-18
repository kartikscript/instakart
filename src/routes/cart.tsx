import Billing from '@/components/Billing'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { useGlobalContext } from '@/context/GlobalContext'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ShoppingCart } from 'lucide-react'

export const Route = createFileRoute('/cart')({
  component: RouteComponent,
})

function RouteComponent() {

  const {cartItems} = useGlobalContext()

  const billingDetail ={
    actualPrice:0,
    discountPrice:0,
  }
  return (
    <div className='h-[92vh] sm:h-screen flex flex-col bg-white dark:bg-black'>
      <div className='w-full sm:sticky sm:top-0 flex items-center gap-5 z-10 p-4 text-xl font-medium  bg-main-50 dark:bg-dark-main-50 '>
        <Link to='/'><ArrowLeft className=''/> </Link> 
        <h2>My Cart</h2>
      </div>
      {
        cartItems.length !== 0 ? (
          <section className='relative sm:mx-auto flex-1 overflow-y-auto '>
            <div className='p-4 space-y-5'>
              {
                cartItems.map(item =>{
                  billingDetail.discountPrice += (item.price * (item.quantity || 1));
                  const actualPrice = item.price/(1 - (item.discountPercentage/100));
                  billingDetail.actualPrice += (actualPrice * (item.quantity || 1));
                return (<ProductCard key={item.id} data={item} viewAsCartProd={true}/>
                )
                })
              }

              <Billing billingDetail={billingDetail}/>
              <div className='flex justify-between p-3 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 font-medium text-sm'>
                <h2>Your total savings</h2>
                <p>${(billingDetail.actualPrice - billingDetail.discountPrice).toFixed(2)}</p>
              </div>
              <Button className='sticky bottom-0 bg-green-600 hover:bg-green-500 text-white w-full py-6 text-lg sm:text-base'>Buy Now</Button>
            </div>
          </section>
        ):(
          <div className='flex flex-col gap-4 items-center justify-center h-full'>
            <ShoppingCart className='size-20 text-black/30 dark:text-neutral-500'/>
            <h1 className='text-2xl font-medium'>Your cart is empty !</h1>
            <Link to='/' className='px-4 py-2 font-medium rounded-lg bg-main text-main-50 dark:bg-dark-main dark:text-dark-main-50'>Shop Now</Link>
          </div>
        )
      }
      </div>
  )
}
