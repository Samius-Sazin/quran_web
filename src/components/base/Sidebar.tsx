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
            <div className="fixed w-[80px] top-[66px] left-0 h-screen bg-white shadow-lg px-1">
                <div className="flex flex-col gap-8">
                    {
                        items.map((item) => (
                            <Link
                                href={item.link}
                                key={item.id}
                                className="first:mt-10 py-2 flex flex-col items-center hover:bg-gray-200 rounded-md cursor-pointer"
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