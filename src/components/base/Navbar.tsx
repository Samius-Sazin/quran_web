import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const items = [
    {
        id: 1,
        name: "Al Quran",
        link: "/",
        icon: "/logo.png",
    },
    {
        id: 2,
        name: "Greentech Apps",
        link: "https://app.gtaf.org/accounts/login",
        icon: "/logo2.png",
    },
    {
        id: 3,
        name: "Dua & Zikr",
        icon: "/logo2.png",
        link: "https://dua.gtaf.org/?utm_source=quran-web&utm_medium=navbar",
    },
    {
        id: 4,
        name: "Seerah",
        link: "https://seerah.gtaf.org/?utm_source=quran-web&utm_medium=navbar",
        icon: "/logo2.png",
    },
]


const Navbar = () => {
    return (
        <nav className='w-full top-0 left-0 fixed bg-[#539055] flex justify-between items-center px-2 py-2 text-white'>
            <div className='flex items-center gap-2'>
                <Link href={'/'} className='flex items-center gap-2'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={50}
                        height={50}
                        className={``}
                    />
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-1 cursor-pointer'>Al Quran <ChevronDown /> </DropdownMenuTrigger>
                    <DropdownMenuContent className='rounded-lg border-2 border-neutral-400 p-2'>
                        {
                            items.map((item) => (
                                <DropdownMenuItem key={item.id} >
                                    <Link
                                        href={item.link}
                                        target={item.name === "Al Quran" ? "_self" : "_blank"}
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={30}
                                            height={30}
                                            className={`rounded-full`}
                                        />
                                        <p className='text-sm font-semibold'>{item.name}</p>
                                    </Link>
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <Link href={`https://gtaf.org/donate/?utm_source=quran-web&utm_medium=navbar`} target="_blank" className='border-none'>
                <Button variant={'secondary'} className='tracking-tighter rounded-full text-md font-semibold'>Donate</Button>
            </Link>
        </nav>
    )
}

export default Navbar