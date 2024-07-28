import Image from 'next/image'
import ShopItem from './menus/ShopItem'
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
          <ShopItem src={'/images/baroj.png'} title={'باروژ'} description={'سوخاری, پیتزا, پاستا, ساندویچ'} id={0} />
          <ShopItem src={'/images/baroj.png'} title={'باروژ'} description={'سوخاری, پیتزا, پاستا, ساندویچ'} id={1} />

        </div>
      </div>
    </section>
  )
}

export default VerticalMenu
