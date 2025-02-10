import { SquarePen } from "lucide-react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const Verify = ({number,setShowVerificationPage}:{number:string,setShowVerificationPage:(prev:boolean)=>void}) => {

  const [otpValue, setOtpValue] = useState('')
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const resendOTP = () => {
    setTimeLeft(30);
    setCanResend(false);
  };


  const submitOtp = (value:string)=>{
    console.log('OTP submitted',value)
  }

  const handleOtpChange = (value:string)=>{
    setOtpValue(value)
    if(value.length === 6){
      submitOtp(value)
    }
  }
  return (
    <section className="flex-1 flex flex-col justify-between p-4  bg-white rounded-t-3xl">
      <div className='space-y-6 font-medium mt-10'>
            <div className="space-y-1">
              <label>Enter verification code</label>
              <p className="flex items-center gap-2 font-normal tracking-wide text-[13px] text-grey-150"><span>Sent to +91 {number}</span> <SquarePen className="size-4 text-main" onClick={()=>setShowVerificationPage(false)}/></p>
            </div>
            <InputOTP disabled={otpValue.length === 6} value={otpValue} onChange={value =>handleOtpChange(value)} maxLength={6} autoFocus inputMode="numeric"  className="w-full ring-red-300">
              <InputOTPGroup className="flex justify-between w-full  *:text-xl *:size-12 *:rounded-md">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
      </div>
      <div className="w-full space-y-4">
        <p className="text-grey-150 text-sm tracking-wide text-center">Didn&apos;t get the code ?<br/></p>
       <Button variant={'outline'}  disabled={!canResend} onClick={resendOTP} className="w-full bg-secondary text-sm font-medium"> {canResend ? 'Resend code' :`Resend code in ${timeLeft}s`}</Button>

      </div>
       

    </section>
  )
}

export default Verify