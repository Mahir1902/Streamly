'use client'
import { Bell, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import UserNav from './UserNav'

type linkProps = {
    name:string
    href:string

}

const links: linkProps[] = [
    {
        name: 'Home',
        href: '/home'
    },
    {
        name: 'Tv Shows',
        href:'/home/tv-shows'
    },
    {
        name: "Movies",
        href: 'home/movies'
    },
    {
        name: 'Recently Added',
        href: 'home/recent'
    }, 
    {
        name: 'My List',
        href: 'home/user/list'
    }
]


export default function Navbar() {

    const pathname = usePathname()


  return (
    <div className='w-full flex max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8'>
        <div className='flex items-center'>
            <Link href={'/home'} className='text-orange text-3xl sm:text-4xl md:text-5xl font-bold'>
                STREAMLY
            </Link>
            <ul className='lg:flex gap-x-4 ml-14 hidden'>
                {links.map((link, index) => (
                    <div key={index}>
                        <li className='hover:scale-105 transition-all'>
                            {pathname === link.href ? (
                                <Link href={link.href} className='text-white font-semibold underline'>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className='text-gray-300 font-normal'>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    </div>
                ))}
            </ul>
        </div>

        <div className='flex items-center gap-x-8'>
            <Search className='text-gray-300 w-5 h-5'/>
            <Bell className='text-gray-300 w-5 h-5'/>
            <UserNav/>
        </div>

    </div>
  )
}