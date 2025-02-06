import MovingText from '@/components/MovingText'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Verify from '@/components/Verify'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {

  const [showVerificationPage, setShowVerificationPage] = useState(false)
  const [number, setNumber] = useState('')

  const handleSubmit = ()=>{
    setShowVerificationPage(true)
  }
  return (
    <>
    
    <div className='h-screen flex flex-col gap-6 bg-main'>
      <header className=' p-6 space-y-4 text-white text-center'>
        <h1 className='text-4xl font-bold '>Instakart</h1>
        <h2 className='font-medium tracking-wide'>From Cart to Door in No Time</h2>
      </header>
      <MovingText texts={['Instant Delivery','Real-time Tracking','Secure Payments','Scheduled Delivery','Exclusive Deals']}/>
      <MovingText texts={['Fresh Fruits','Dairy Products','Beverages','Snacks & Chips','Personal Care','Rice & Grains']} isReverse={true} />
      {
        showVerificationPage 
        ? 
        <Verify setShowVerificationPage={setShowVerificationPage} number={number}/> 
        : (
        <section className='flex-1 flex flex-col justify-between p-4  bg-white rounded-t-3xl'>
          <div className='space-y-4 font-medium mt-10 '>
            <label>Enter your number</label>
            <div className='relative'>
            <Input
              size={10}
              value={number || ''} 
              onChange={(e)=>e.target.value.length <=10 && setNumber(e.target.value)} 
              type='number' 
              inputMode='numeric'
              onKeyDown={(e)=>e.key === 'Enter' && handleSubmit()}
              // placeholder='1234567890' 
              className='border-main/50 pl-12 py-5 focus-visible:ring-main ' />
            <span className='absolute top-1/2 -translate-y-1/2  left-2 text-black/50 border-r border-black/50 pr-1'>+91</span>
            </div>
          </div>
          <div className='w-full space-y-4'>
            <Button disabled={number.length !==10} onClick={handleSubmit} type='button' className='py-5 disabled:bg-main/90 bg-main w-full active:bg-main-50 transition-all '>Continue</Button>
            <p className='text-xs text-grey-100'>By continuing, you agree to our Terms of service & Privacy policy</p>
          </div>

        </section>
        )
      }
    </div>

    </>
  )
}
