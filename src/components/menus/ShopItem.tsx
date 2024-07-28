import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
type Props = {
    src: string
    title: string
    description: string
    id: number
}
function ShopItem(props: Props) {
    const router = useRouter()
    return (
        <div onClick={e => router.push(`/home/${props.id}`)} className='my-2 cursor-pointer flex w-60 h-44 flex-col gap-y-2 rounded-3xl bg-white [box-shadow:0px_1px_4px_0px_#00000040]'>
            <div>
                <Image
                    src={props.src}
                    alt='baroj'
                    width={600}
                    height={400}
                    className='w-full h-28 object-cover rounded-t-3xl'
                    loading='lazy'
                    sizes='(max-width: 600px) 100vw, 600px'
                />
            </div>
            <div dir='rtl' className='px-5'>
                <h4 className='font-semibold'>{props.title}</h4>
                <span className='text-right text-xs'>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

export default ShopItem
