import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'
type Props = {
    onClose: Function
}
function WelcomeToast(props: Props) {
    return (
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
                    onClick={e => props.onClose()}
                    className='absolute left-1 top-1 flex'
                >
                    <IoClose color='white' size={20} />
                </button>
            </div>
        </div>
    )
}

export default WelcomeToast
