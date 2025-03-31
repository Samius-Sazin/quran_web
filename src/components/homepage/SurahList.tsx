import Link from 'next/link';
import React from 'react'

type surahType = {
    surahName: string;
    surahNameArabic: string;
    surahNameArabicLong: string;
    surahNameTranslation: string;
    revelationPlace: string;
    totalAyah: number;
}

const SurahList = ({ surah, index, selectedTab }: { surah: surahType, index: number, selectedTab: string }) => {
    return (
        <Link
            href={`/${index + 1}`}
            className='flex items-center justify-between w-full border border-neutral-300 rounded-lg hover:bg-neutral-50 cursor-pointer px-2 py-4'
        >
            <div className='flex items-center gap-4'>
                {
                    selectedTab === "surah"
                        ? <span>{index + 1}</span>
                        : <span>{surah?.totalAyah}</span>
                }
                <div className='flex flex-col items-start'>
                    <span className='text-[#539055] text-lg'>{surah?.surahName}</span>
                    <span className='text-xs opacity-75'>{surah?.surahNameTranslation}</span>
                </div>
            </div>
            <span>{surah?.surahNameArabic}</span>
        </Link>
    )
}

export default SurahList