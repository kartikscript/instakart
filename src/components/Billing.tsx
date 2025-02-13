import {  Bike, PlusCircle, ShoppingBag } from 'lucide-react'


interface BillingProps {
  actualPrice:number
  discountPrice:number
}
const Billing = ({billingDetail}:{billingDetail:BillingProps}) => {
  const {actualPrice,discountPrice} = billingDetail
  return (
    <div className='px-3 py-5 bg-main-50 dark:bg-dark-main-50 space-y-3 rounded-md shadow-lg shadow-grey-50/10 dark:shadow-dark-main-50/10'>
      <h2 className=' font-medium'>Bill Details</h2>
      <section className='space-y-2 text-xs *:flex *:justify-between *:items-center'>
        <div>
          <div className='flex items-center gap-1  '>
            <PlusCircle className='size-3'/>
            <h3>Total Price</h3>
          </div>
          <h3><span className='line-through text-black/50 dark:text-white/50 mr-1'>${actualPrice.toFixed(2)}</span>${discountPrice.toFixed(2)}</h3>
        </div>
        <div>
          <div className='flex items-center gap-1  '>
            <Bike className='size-3'/>
            <h3>Delivery Charge</h3>
          </div>
          <h3 className='text-green-400 dark:text-green-500'><span className='line-through text-black/50 dark:text-white/50 mr-1'>${25}</span>FREE</h3>
        </div>
        <div>
          <div className='flex items-center gap-1  '>
            <ShoppingBag className='size-3'/>
            <h3>Handling Charge</h3>
          </div>
          <h3>$10</h3>
        </div>
        <div className='font-medium text-sm pt-2 border-t border-black/10 dark:border-white/10'>
          <h2>Grand Total</h2>
          <h3>$140</h3>
        </div>
      </section>
    </div>
  )
}

export default Billing