import React from 'react'
import Link from 'next/link';

const LastRead = () => {
    const lastReadSurah = [
        {
            surahName: "ALI 'IMRAN",
            surahNo: "3",
        },
        {
            surahName: "AL-FAATIHA",
            surahNo: "1",
        },
        {
            surahName: "AL-MAAIDA",
            surahNo: "5",
        },
    ]
    // todo: fetcch from DB
    return (
        <div className='flex flex-col gap-2 px-2 md:px-0'>
            <p className="text-xs">Last Read</p>
            <div className='flex flex-wrap items-center gap-4'>
                {
                    lastReadSurah.map((surah, index) => (
                        <Link
                            href={`/${surah.surahNo}`}
                            key={index}
                            className='text-[#539055] border border-[#539055]/[0.2] text-sm px-6 py-1 rounded-md cursor-pointer hover:bg-neutral-100 active:bg-white transition-colors duration-300'
                        >
                            <p>{surah.surahName} : {surah.surahNo}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default LastRead