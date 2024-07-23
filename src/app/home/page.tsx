'use client'
import MainHeader from '@/components/MainHeader'
import VerticalMenu from '@/components/VerticalMenu'
import { useEffect, useRef, useState } from 'react'
import { Sheet, SheetRef } from 'react-modal-sheet'

function Page() {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef<SheetRef>()
  const snapTo = (i: number) => ref.current?.snapTo(i)
  useEffect(() => {
    if (!isOpen) {
      setOpen(true)
    }
  }, [isOpen])
  return (
    <div>
      <MainHeader />
      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={() => snapTo(2)}
        snapPoints={[700, 400, 20]}
        initialSnap={1}
        initial
        onCloseEnd={() => setOpen(true)}
        onSnap={snapIndex => !isOpen && setOpen(true)}
      >
        <Sheet.Container>
          <Sheet.Content>
            <div className='flex place-items-center justify-center'>
              <div className='mt-2 h-2 w-12 rounded bg-[#D9D9D9]'></div>
            </div>
            <div className='overflow-y-auto'>
              <VerticalMenu
                menuTitle={'ارزان'}
                menuDescription={'پایین ترین قیمت ها در دسته بندی های مختلف'}
                items={[]}
              />
              <VerticalMenu
                menuTitle={'ایرانی سنتی'}
                menuDescription={'کباب, خورشت, خوراک, دریایی, صبحانه'}
                items={[]}
              />
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  )
}

export default Page
