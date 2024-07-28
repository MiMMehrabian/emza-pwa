'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Sheet, SheetRef } from 'react-modal-sheet'

import MainHeader from '@/components/MainHeader'
import Image from 'next/image'

function Page() {
    const [snapPoints, setSnapPoints] = useState<Array<any>>([])
    const [margin, setMargin] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef<SheetRef>()
    const snapTo = (i: number) => ref.current?.snapTo(i)

    useLayoutEffect(() => {
        if (window) {
            setSnapPoints([
                window.innerHeight * 0.75, // 75% of the screen height
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
            <MainHeader />
            <Image
                src={"/images/baroj.png"}
                alt='baroj'
                width={1000}
                height={1000}
                className='w-full'
                loading='lazy'
                quality={100}
                sizes='(max-width: 600px) 100vw, 600px'
            />
            <Sheet
                ref={ref}
                isOpen={isOpen}
                onClose={() => snapTo(1)}
                drag="y"
                snapPoints={snapPoints}
                initialSnap={0}
                initial
                onCloseEnd={() => setOpen(true)}
                onSnap={snapIndex => {
                    !isOpen && setOpen(true)
                }}
            >
                <Sheet.Container className='!rounded-t-2xl'>
                    <Sheet.Content className='bg-[#F9F9F9]'>
                        <div className='flex place-items-center justify-center'>
                            <div className='mt-2 h-2 w-12 rounded bg-[#D9D9D9]'></div>
                        </div>
                        <div className={`overflow-y-auto`}>
                            <div dir='rtl' className='flex justify-start flex-col gap-y-5 p-5'>
                                <h1 className='font-extrabold text-sm'>
                                    باروژ
                                </h1>
                                <span className='font-normal text-xs'>
                                    سوخاری, پیتزا, پاستا, ساندویچ
                                </span>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </div>
    )
}

export default Page
