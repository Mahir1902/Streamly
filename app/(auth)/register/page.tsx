import { Button } from '@/components/ui/button'
import React from 'react'
import heroImg from '@/public/images/hero.jpg'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { FaGithub, FaGoogle } from "react-icons/fa";

type Props = {}

export default function page({}: Props) {
  return (
    <div className='bg-black/80 py-10 px-6 mt-24 rounded md:mt-0 md:max-w-sm md:px-14'>
        <form action="">
          <h1 className='text-white text-3xl font-semibold'>Sign Up</h1>
          <div className='mt-5 space-y-4'>
            <Input type='email' name='emal' placeholder='Email' className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block caret-orange text-white'/>
            <Button type="submit" className='w-full bg-orange text-white font-semibold hover:bg-orange/75'>Sign Up</Button>
          </div>
        </form>
        <div className='text-gray-500 font-medium text-sm mt-2'>
          Already have an account? <Link href={'/login'} className='text-white hover:underline '>Log in now!</Link>
        </div>

        <div className='mt-6 flex justify-center gap-3 items-center'>
          <Button variant={'outline'} size={'icon'}>
              <FaGithub className='text-white w-5 h-5'/>
          </Button>
          <Button variant={'outline'} size={'icon'}>
              <FaGoogle className='text-white w-5 h-5'/>
          </Button>
        </div>
    </div>
  )
}