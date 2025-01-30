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
          cartItems.map(item =>{
          return (<ProductCard key={item.id} data={item} viewAsCartProd={true}/>
            // <div key={item.id} className="w-full flex items-center gap-4 text-xs font-semibold p-2 bg-grey-50 dark:bg-dark-grey-50 shadow-md shadow-grey-100 dark:shadow-dark-grey-100/20 rounded-md text-black dark:text-white">
            //   <img
            //     src={item.images[0]}
            //     alt="product"
            //     className="size-20   "
            //   />
            //   <div className='flex-1 space-y-[1px]'>
            //     <h3 className=" w-[70%] text-ellipsis line-clamp-2 whitespace-normal">Cheetos Flamin Hot Chips Flamin Hot ChipsFlamin Hot Chips  </h3>
            //     <p className="font-normal text-grey-150 dark:text-dark-grey-150 text-[10px]">60 g</p>
            //       <span className=" flex gap-1 text-start">
            //         <p>₹ 20</p>
            //         <p className="text-grey-150 dark:text-dark-grey-150 font-normal line-through text-[10px]">₹ 25</p>
            //       </span>
            //   </div>
            //   <div className={`uppercase text-sm ${quantity?"bg-main text-main-50 dark:bg-dark-main dark:text-dark-main-50 ":'text-main dark:text-dark-main'} border-main dark:border-dark-main border w-14 *:w-full py-1 dark:font-black text-center rounded-md transition-all duration-300`}>
            //     { 
            //       quantity === 0 ? (
            //         <button onClick={() => setQuantity(quantity + 1)}>Add</button>
            //       ) : (
            //         <div className="grid grid-cols-[1fr_auto_1fr] gap-1">
            //           <button onClick={() => setQuantity(quantity - 1)}>-</button>
            //           <span className='text-white'>{quantity}</span>
            //           <button onClick={() =>{
            //             if(quantity < limit) {
            //               setQuantity(quantity + 1)
            //             }else {
            //               toast({
            //                 title: "Item Limit Reached",
            //                 description: "You can only add 5 items",
            //                 duration: 5000,
            //                 role:'alert',
            //               })
            //             }
            //           }}>+</button>
            //         </div>
            //       )
            //     }
            //   </div>
            // </div>
          )
          })
        }

       </div>
      </div>
  )
}
