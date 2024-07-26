'use client'
import dynamic from 'next/dynamic'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { Sheet, SheetRef } from 'react-modal-sheet'

import MainHeader from '@/components/MainHeader'
import Image from 'next/image'
const VerticalMenu = dynamic(() => import('@/components/VerticalMenu'))

function Page() {
  const [snapPoints, setSnapPoints] = useState<Array<any>>([])
  const [margin, setMargin] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [showToast, setShowToast] = useState(true)
  const ref = useRef<SheetRef>()
  const snapTo = (i: number) => ref.current?.snapTo(i)

  useLayoutEffect(() => {
    if (window) {
      setSnapPoints([
        window.innerHeight * 0.95, // 90% of the screen height
        window.innerHeight * 0.75, // 75% of the screen height
        window.innerHeight * 0.55, // 50% of the screen height
        window.innerHeight * 0.35, // 35% of the screen height
        window.innerHeight * 0.08 // 5% of the screen height
      ])
    }
  }, [])
  useEffect(() => {
    if (!isOpen) {
      setOpen(true)
    }
  }, [isOpen])
  return (
    <div>
      {showToast && (
        <div className='animate-leave absolute top-20 w-full'>
          <div className='pointer-events-auto relative mx-auto flex w-11/12 max-w-md flex-row-reverse rounded-lg bg-[linear-gradient(82.4deg,_#68ACFF_-8.04%,_#184781_142.37%)] shadow-lg ring-1 ring-black ring-opacity-5'>
            <div dir='rtl' className='w-3/4 flex-1 p-4'>
              <div className='flex items-start'>
                <div className='pt-0.5'></div>
                <div className='ml-3 w-full'>
                  <p className='text-xs font-bold text-white'>
                    به امضا خوش آمدی
                  </p>
                  <p className='mt-1 text-xs font-normal text-white'>
                    شما در حال استفاده از نسخه آزمایشی هستی.
                  </p>
                  <p className='mt-1 text-[10px] font-semibold text-white'>
                    اطلاعات بیشتر
                  </p>
                </div>
              </div>
            </div>
            <div className='flex w-1/4 place-items-center justify-center'>
              <Image
                width={40}
                height={40}
                className='h-10 w-10'
                src={'/images/bell.png'}
                alt='bell'
              />
            </div>
            <button
              onClick={e => setShowToast(false)}
              className='absolute left-1 top-1 flex'
            >
              <IoClose color='white' size={20} />
            </button>
          </div>
        </div>
      )}
      <MainHeader />
      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={() => snapTo(1)}
        snapPoints={snapPoints}
        initialSnap={3}
        initial
        onCloseEnd={() => setOpen(true)}
        onSnap={snapIndex => {
          !isOpen && setOpen(true)
          if (snapIndex === 4) {
            setMargin(true)
          } else {
            setMargin(false)
          }
        }}
      >
        <Sheet.Container className='!rounded-t-2xl'>
          <Sheet.Content className='bg-[#F9F9F9]'>
            <div className='flex place-items-center justify-center'>
              <div className='mt-2 h-2 w-12 rounded bg-[#D9D9D9]'></div>
            </div>
            <div className={`overflow-y-auto`}>
              {!margin && (
                <>
                  <VerticalMenu
                    menuTitle={'ارزان'}
                    menuDescription={
                      'پایین ترین قیمت ها در دسته بندی های مختلف'
                    }
                    items={[]}
                  />
                  <VerticalMenu
                    menuTitle={'ایرانی سنتی'}
                    menuDescription={'کباب, خورشت, خوراک, دریایی, صبحانه'}
                    items={[]}
                  />
                </>
              )}
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
      <div
        dir='rtl'
        className='slide-top fixed -bottom-2 z-[99999999] flex h-10 w-screen gap-x-2 overflow-x-scroll bg-white/75 px-2 duration-100 ease-linear'
      >
        <div className='flex flex-shrink-0 place-items-center justify-center'>
          <button className='box-shadow rounded-full bg-white p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9.10999 7.47999C10.89 6.82999 12.83 6.82999 14.61 7.47999'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.03 10.48C11.23 10.15 12.5 10.15 13.7 10.48'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div className='flex gap-x-2 overflow-x-scroll'>
          <div className='flex-shrink-0 rounded-lg bg-white px-2 py-3 text-xs font-semibold text-[#3E3E3E]'>
            سفارش غذا از رستوران یملی
          </div>
          <div className='flex-shrink-0 rounded-lg bg-white px-2 py-3 text-xs font-semibold text-[#3E3E3E]'>
            دو پرس پاچینی با نوشابه و سس ...
          </div>
          <div className='flex-shrink-0 rounded-lg bg-white px-2 py-3 text-xs font-semibold text-[#3E3E3E]'>
            دو پرس پاچینی با نوشابه و سس ...
          </div>
          <div className='flex-shrink-0 rounded-lg bg-white px-2 py-3 text-xs font-semibold text-[#3E3E3E]'>
            دو پرس پاچینی با نوشابه و سس ...
          </div>
          <div className='flex-shrink-0 rounded-lg bg-white px-2 py-3 text-xs font-semibold text-[#3E3E3E]'>
            دو پرس پاچینی با نوشابه و سس ...
          </div>
          <div className='flex-shrink-0 rounded-lg bg-white px-2 py-3 text-xs font-semibold text-[#3E3E3E]'>
            دو پرس پاچینی با نوشابه و سس ...
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
