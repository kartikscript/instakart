import { useToast } from "@/hooks/use-toast"
import { Product } from './../lib/types';
import { useGlobalContext } from "@/context/GlobalContext";

const ProductCard = ({data,viewAsCartProd}:{data:Product,viewAsCartProd ?: boolean}) => {

  const {id,title,thumbnail,minimumOrderQuantity,price,weight,discountPercentage} = data
  // const imageSrc = images[0]
  const {cartItems, setCartItems} = useGlobalContext()
  const cartItem = cartItems?.find(item => item.id === id);
  const quantity = cartItem ? cartItem?.quantity : 0;

  const addQuantity = () =>{
    setCartItems(prev =>{
      if(cartItem) return prev?.map(item =>item.id === id ?{...item,quantity:item.quantity+1} :item)
      return prev ? [...prev,{...data,quantity:quantity+1}] :[{...data,quantity:quantity+1}]
    })
  }
  const removeQuantity = () =>{
    setCartItems(prev =>{
      return prev?.map(item => item.id === id ? {...item,quantity:item.quantity - 1} :item ).filter(item => item.quantity>0)
    })
  }
  const {toast} = useToast()
  const actualPrice = price/(1 - (discountPercentage/100))

  // console.log(data.category,data.tags)
  return (
    <div className={`gap-2 grid ${viewAsCartProd ? 'grid-cols-[auto_auto_1fr] grid-rows-[auto_auto_auto]' : 'grid-cols-[auto_auto]' } place-items-center justify-items-start text-xs font-semibold p-2 bg-grey-50 dark:bg-dark-grey-50 shadow-md shadow-grey-100/60 dark:shadow-dark-grey-100/20 rounded-md text-black dark:text-white`}>
        <img
        src={thumbnail}
        alt="product"
        className={` ${viewAsCartProd ? 'col-span-1 row-span-full' : 'col-span-2'}  size-20 mx-auto dark:bg-white/5 bg-black/5 rounded-md  object-contain`}
      />
     <h3 className={`${viewAsCartProd ? 'row-span-1' : 'col-span-2'}  text-ellipsis line-clamp-2 whitespace-normal tracking-wide`}>{title}  </h3>
     <p className={`${viewAsCartProd ? 'col-start-2 col-span-1 row-span-1' : 'col-span-2'} font-normal text-grey-150 dark:text-dark-grey-150 text-[10px]`}>{weight*10} g</p>
      <div className={`leading-none space-y-[3px] truncate w-max ${viewAsCartProd && 'col-start-2 row-span-1'}  col-span-1`}>
        <h1>$ {price}</h1>
        <p className="text-grey-150 dark:text-dark-grey-150 font-normal line-through text-[10px]">$ {actualPrice.toFixed(2)}</p>
      </div>
      <div className={`col-span-1 ${viewAsCartProd && 'row-span-full col-start-3'} justify-self-end w-fit uppercase  ${quantity?"bg-main text-main-50 dark:bg-dark-main dark:text-dark-main-50 ":'text-main dark:text-dark-main'} border-main dark:border-dark-main border min-w-12 *:w-full py-1 dark:font-black text-center rounded-md transition-all duration-300`}>
        { 
          quantity === 0 ? (
            <button onClick={() => addQuantity()}>Add</button>
          ) : (
            <div className="grid grid-cols-[1fr_auto_1fr] gap-1">
              <button onClick={() => removeQuantity()}>-</button>
              <span >{quantity}</span>
              <button onClick={() =>{
                if(quantity < minimumOrderQuantity) {
                  addQuantity()
                }else {
                  toast({
                    title: "Item minimumOrderQuantity Reached",
                    description: `You can only add ${minimumOrderQuantity} items`,
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
  )
}

export default ProductCard