import Image from 'next/image'
type Props = {
  menuTitle: string
  menuDescription: string
  items: Array<any>
}
function VerticalMenu(props: Props) {
  return (
    <section className='p-2'>
      <h4 className='text-right font-bold'>{props.menuTitle}</h4>
      <p dir='rtl' className='mt-1 w-full text-right text-sm'>
        {props.menuDescription}
      </p>
      <div className='flex w-full justify-between overflow-x-hidden'>
        <div
          dir='rtl'
          className='flex w-full gap-x-5 overflow-x-scroll [&>div]:flex-shrink-0'
        >
          <div className='my-2 flex w-60 h-52 flex-col gap-y-2 rounded-3xl bg-white [box-shadow:0px_1px_4px_0px_#00000040]'>
            <div>
              <Image
                src={'/images/baroj.png'}
                alt='baroj'
                width={600}
                height={400}
                className='w-full'
                loading='lazy'
                sizes='(max-width: 600px) 100vw, 600px'
              />
            </div>
            <div dir='rtl' className='px-5 py-2'>
              <h4 className='font-semibold'>باروژ</h4>
              <span className='text-right text-xs'>
                سوخاری, پیتزا, پاستا, ساندویچ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerticalMenu
