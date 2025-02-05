import MovingText from '@/components/MovingText'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='h-screen flex flex-col gap-6 bg-main'>
      <header className=' p-6 space-y-4 text-white text-center'>
        <h1 className='text-4xl font-bold '>Instakart</h1>
        <h2 className='font-medium tracking-wide'>From Cart to Door in No Time</h2>
      </header>
      <MovingText texts={['Instant Delivery','Real-time Tracking','Secure Payments','Scheduled Delivery','Exclusive Deals']}/>
      <MovingText texts={['Fresh Fruits','Dairy Products','Beverages','Snacks & Chips','Personal Care','Rice & Grains']} isReverse={true} />
      <form className='flex-1 flex flex-col justify-end gap-8 p-6  bg-white rounded-t-3xl'>
        <div className='space-y-4 font-medium'>
          <label>Enter your number</label>
          <div className='relative'>
           <Input type='number' placeholder='1234567890' className='border-main/50 pl-12 focus-visible:ring-main' />
           <span className='absolute top-1/2 -translate-y-1/2 left-2 text-black/50 border-r border-black/50 pr-1'>+91</span>
          </div>
        </div>
        <Button className='bg-main'>Continue</Button>
      </form>
    </div>
  )
}
