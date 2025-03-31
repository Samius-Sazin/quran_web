"use client"

import React from 'react'
import toast from 'react-hot-toast'
import { HomeIcon, Library, MoreHorizontal, NotebookPen, User } from 'lucide-react'
import Link from 'next/link'


const items = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={20} />,
        link: "/",
    },
    {
        id: 2,
        title: "Planner",
        icon: <NotebookPen size={20} />,
        link: "#",
    },
    {
        id: 3,
        title: "Library",
        icon: <Library size={20} />,
        link: "#",
    },
    {
        id: 4,
        title: "Profile",
        icon: <User size={20} />,
        link: "#",
    },
    {
        id: 5,
        title: "More",
        icon: <MoreHorizontal size={20} />,
        link: "#",
    },
]

const Sidebar = () => {

    return (
        <div>
            <div className="
            fixed 
            bg-[#539055]/[0.6] backdrop-blur-[10px] py-2 px-4 rounded-md  bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center
            md:w-[80px] md:top-[0px] md:bottom-0 md:left-0 md:h-screen md:bg-white shadow-lg md:px-1 md:flex-none md:justify-normal md:-translate-x-0 md:rounded-none
            "
            >
                <div className="flex md:flex-col md:gap-8 sm:gap-4 gap-2">
                    {
                        items.map((item) => (
                            <Link
                                href={item.link}
                                key={item.id}
                                className="md:first:mt-10 md:py-2 p-2 flex flex-col items-center md:hover:bg-gray-200 md:active:bg-[#539055] hover:bg-[#539055ed] active:bg-[#5390556d] rounded-md cursor-pointer transition-colors duration-300"
                                onClick={() => {
                                    if (item.link === "#") {
                                        toast("Coming soon!", {
                                            icon: '😃',
                                        });
                                    }
                                }}
                            >
                                <span>{item.icon}</span>
                                <span className='text-[12px] font-semibold'>{item.title}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar