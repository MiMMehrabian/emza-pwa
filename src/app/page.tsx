'use client'
import PrimaryBTN from '@/components/PrimaryButton'
import { Input } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()
  return (
    <div className='flex flex-col'>
      {/* <SplashScreen /> */}
      <div dir='rtl' className='p-4'>
        <h4 className='my-3 text-sm font-semibold'>ثبت نام/ورود</h4>
        <span className='text-sm font-normal'>
          شماره موبایل خود را وارد کنید.
        </span>
      </div>
      <div dir='rtl' className='p-4'>
        <Input
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          color='blue'
          label='  شماره موبایل  '
          crossOrigin={undefined}
        />
        <PrimaryBTN
          onClick={e => router.push('/confirmLogin')}
          className='mt-10 w-full p-2 text-sm'
        >
          تایید
        </PrimaryBTN>
      </div>
    </div>
  )
}
