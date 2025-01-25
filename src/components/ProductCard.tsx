import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

const ProductCard = () => {

  const [quantity, setQuantity] = useState(0)
  const {toast} = useToast()
  const limit = 5
  
  return (
    <div className="w-32 inline-block text-ellipsis text-xs font-semibold p-2 bg-grey-50 dark:bg-dark-grey-50 shadow-md shadow-grey-100 dark:shadow-dark-grey-100 rounded-md text-black dark:text-white">
      <img
       src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802"
       alt="product"
       className="size-20 mx-auto  "
     />
     <h3 className="mt-1 text-ellipsis line-clamp-2 whitespace-normal">Cheetos Flamin Hot Chips  </h3>
     <p className="font-normal text-grey-150 dark:text-dark-grey-150 text-[10px]">60 g</p>
     <div className="mt-1 flex justify-between items-center">
      <span className="leading-none space-y-[2px]">
        <p>₹ 20</p>
        <p className="text-grey-150 dark:text-dark-grey-150 font-normal line-through text-[10px]">₹ 25</p>
      </span>
      <div className={`uppercase text-sm ${quantity?"bg-main text-main-50 dark:bg-dark-main dark:text-dark-main-50 ":'text-main dark:text-dark-main'} border-main dark:border-dark-main border w-14 *:w-full py-1 dark:font-black text-center rounded-md transition-all duration-300`}>
        { 
          quantity === 0 ? (
            <button onClick={() => setQuantity(quantity + 1)}>Add</button>
          ) : (
            <div className="grid grid-cols-[1fr_auto_1fr] gap-1">
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
              <span >{quantity}</span>
              <button onClick={() =>{
                if(quantity < limit) {
                  setQuantity(quantity + 1)
                }else {
                  toast({
                    title: "Item Limit Reached",
                    description: "You can only add 5 items",
                    duration: 5000,
                    role:'alert',
                   })
                }
              }}>+</button>
            </div>
          )
        }
      </div>
     </div>
    </div>
  )
}

export default ProductCard