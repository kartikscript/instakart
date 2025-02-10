import Billing from '@/components/Billing'
import CartStatusLine from '@/components/CartStatusLine'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { useGlobalContext } from '@/context/GlobalContext'
import { createFileRoute } from '@tanstack/react-router'

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
    <div className='min-h-screen relative'>
       <CartStatusLine/>
       <div className='p-4 space-y-5'>
        {
          cartItems[0] ? cartItems.map(item =>{
            billingDetail.discountPrice += (item.price * (item.quantity || 1));
            const actualPrice = item.price/(1 - (item.discountPercentage/100));
            billingDetail.actualPrice += (actualPrice * (item.quantity || 1));
          return (<ProductCard key={item.id} data={item} viewAsCartProd={true}/>
          )
          })
          :
          (<p className='text-center'>No Items in Cart !</p>)
        }

       <Billing billingDetail={billingDetail}/>
       <div className='flex justify-between p-3 rounded-lg bg-blue-100 text-blue-700 font-medium text-sm'>
         <h2>Your total savings</h2>
         <p>${(billingDetail.actualPrice - billingDetail.discountPrice).toFixed(2)}</p>
       </div>
       <Button className=' bg-green-600 w-full py-6 text-lg'>Buy Now</Button>
       </div>
      </div>
  )
}
