import Image from 'next/image'

function SplashScreen() {
  return (
    <div
      id={'globalLoader'}
      className='absolute left-0 top-0 z-[9999] flex h-screen w-screen place-items-center justify-center bg-primary-color'
    >
      <Image src={'/images/emza.png'} width={200} height={200} alt='emza' />
    </div>
  )
}

export default SplashScreen
