import heroBg from '@/public/images/hero.jpg'
import Image from 'next/image'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className="h-screen relative w-screen flex flex-col md:items-center md:justify-center">
        <h1 className='absolute text-orange text-6xl font-bold left-10 top-6'>STREAMLY</h1>
        <Image
        src = {heroBg}
        alt='Hero Background Image'
        className=' object-cover w-full h-full brightness-50 -z-10 hidden md:block'
        priority
        fill
        />
        {children}
    </div>
  )
}