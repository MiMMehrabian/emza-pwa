import Image from 'next/image'

function SplashScreen() {
  return (
    <div
      id={'globalLoader'}
      className='bg-primary-color absolute left-0 top-0 flex h-screen w-screen place-items-center justify-center'
    >
      <Image src={'/images/emza.png'} width={200} height={200} alt='emza' />
    </div>
  )
}

export default SplashScreen
