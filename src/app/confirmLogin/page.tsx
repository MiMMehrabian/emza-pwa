'use client'
import PrimaryBTN from '@/components/PrimaryButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Page() {
  const router = useRouter()
  return (
    <div>
      <div dir='rtl' className='flex flex-col gap-y-5 px-4 py-8'>
        <h4 className='text-sm font-semibold'>ثبت نام/ورود</h4>
        <span className='text-sm font-normal'>
          کد تایید به شماره موبایل 09123456789 ارسال شد.
        </span>
        <Link className='text-sm font-normal underline' href={'/'}>
          ویرایش شماره
        </Link>
        <div dir='ltr' className='flex w-full gap-x-3' data-hs-pin-input=''>
          <input
            type='text'
            className='border[#EBEBEB] block rounded-md text-center text-sm outline-[#EBEBEB] focus:border-primary-color focus:outline-primary-color disabled:pointer-events-none disabled:opacity-50 w-full py-5'
            data-hs-pin-input-item=''
            autoFocus={true}
          />
          <input
            type='text'
            className='border[#EBEBEB] block rounded-md text-center text-sm outline-[#EBEBEB] focus:border-primary-color focus:outline-primary-color disabled:pointer-events-none disabled:opacity-50 w-full py-5'
            data-hs-pin-input-item=''
          />
          <input
            type='text'
            className='border[#EBEBEB] block rounded-md text-center text-sm outline-[#EBEBEB] focus:border-primary-color focus:outline-primary-color disabled:pointer-events-none disabled:opacity-50 w-full py-5'
            data-hs-pin-input-item=''
          />
          <input
            type='text'
            className='border[#EBEBEB] block rounded-md text-center text-sm outline-[#EBEBEB] focus:border-primary-color focus:outline-primary-color disabled:pointer-events-none disabled:opacity-50 w-full py-5'
            data-hs-pin-input-item=''
          />
        </div>
        <PrimaryBTN
          onClick={e => router.push('/home')}
          className='mt-10 w-full p-2 text-sm'
        >
          تایید
        </PrimaryBTN>
      </div>
      <p dir='rtl' className='text-center text-xs'>01:59 تا ارسال مجدد کد  </p>
    </div>
  )
}

export default Page
