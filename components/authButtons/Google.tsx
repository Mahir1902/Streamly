'use client'

import React from 'react'
import { Button } from '../ui/button'
import { FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

export default function Google() {
  return (
    <Button  onClick={() => signIn('google')} variant={'outline'} size={'icon'}>
              <FaGoogle className='text-white w-5 h-5'/>
          </Button>
  )
}
