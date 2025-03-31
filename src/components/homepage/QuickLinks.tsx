import React from 'react'
import Link from 'next/link';

const QuickLinks = () => {
    const quickLinks = [
        {
            surahName: "YA-SIN",
            surahNo: "36",
        },
        {
            surahName: "AL-KAHF",
            surahNo: "18",
        },
        {
            surahName: "AL-MULK",
            surahNo: "67",
        },
        {
            surahName: "AL-AHQAF",
            surahNo: "46",
        },
    ]
    //todo: fetch from db
    return (
        <div className='flex flex-col gap-2'>
            <p className="text-xs">Last Read</p>
            <div className='flex items-center gap-4'>
                {
                    quickLinks.map((link, index) => (
                        <Link
                            href={`/${link.surahNo}`}
                            key={index}
                            className='text-[#539055] border border-[#539055]/[0.2] text-sm px-6 py-1 rounded-md cursor-pointer hover:bg-neutral-100 active:bg-white transition-colors duration-300'
                        >
                            <p>{link.surahName} : {link.surahNo}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default QuickLinks