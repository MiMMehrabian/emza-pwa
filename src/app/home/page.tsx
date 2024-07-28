'use client'
import 'regenerator-runtime/runtime'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Sheet, SheetRef } from 'react-modal-sheet'
import MainHeader from '@/components/MainHeader'
import WelcomeToast from '@/components/WelcomeToast'
import MainMenu from '@/components/menus/MainMenu'
import { RecordIcon } from '@/components/svgs/svgs'
import QuickAccessItems from '@/components/menus/QuickAccessItems'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
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
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  return (
    <div>
      {showToast && (
        <WelcomeToast onClose={() => setShowToast(false)} />
      )}
      <div className='flex flex-col'>
        {transcript && (
          <p>متن ضبط شده : {transcript}</p>
        )}
      </div>
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
                  <MainMenu />
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
          <button onClick={e => SpeechRecognition.startListening({ language: "fa-IR" })} className='box-shadow rounded-full bg-white p-2'>
            <RecordIcon />
          </button>
        </div>

        <div className='flex gap-x-2 overflow-x-scroll'>
          <QuickAccessItems text={'سفارش غذا از رستوران یملی'} />
          <QuickAccessItems text={'دو پرس پاچینی با نوشابه و سس ...'} />
          <QuickAccessItems text={'دو پرس پاچینی با نوشابه و سس ...'} />
          <QuickAccessItems text={'دو پرس پاچینی با نوشابه و سس ...'} />
          <QuickAccessItems text={'دو پرس پاچینی با نوشابه و سس ...'} />
        </div>
      </div>
    </div>
  )
}

export default Page
