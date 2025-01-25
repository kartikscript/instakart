import ProductCard from './ProductCard'

// const RenderProducts = ({label}:{label:string}) => {
//   if(label === 'Top Products'){
//    return <p>hell</p>
//   }
// }

const FeaturedSection = ({label}:{label:string}) => {

  return (
    <section className='py-2 *:p-3'>
      <h2 className='text-xl font-black dark:font-bold tracking-wide '>{label}</h2>
      <div className='space-x-4 overflow-x-scroll whitespace-nowrap remove-scrollbar '>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        
      </div>
      {/* <RenderProducts label={label}/> */}
    </section>
  )
}

export default FeaturedSection