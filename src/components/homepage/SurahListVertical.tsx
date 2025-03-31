"use client"

import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getAllSurahListAction } from '@/actions/HomepageActions'
import { useParams } from 'next/navigation'
import { X } from 'lucide-react'
import SurahListVerticalSkeleton from '../skeletons/SurahListVerticalSkeleton'

type surahType = {
    surahName: string;
    surahNameArabic: string;
    surahNameArabicLong: string;
    surahNameTranslation: string;
    revelationPlace: string;
    totalAyah: number;
}

const SurahListVertical = () => {
    const { id } = useParams();

    const { data: surahLists, isLoading } = useQuery({
        queryKey: ['surahLists'],
        queryFn: async () => await getAllSurahListAction(),
    })

    return (
        <div className='flex absolute'>
            {
                isLoading && (
                    <SurahListVerticalSkeleton />
                )
            }
            {
                !isLoading && !surahLists && (
                    <p className='flex items-center my-5'><X className='text-red-500' /> No surah found</p>
                )
            }
            {
                !isLoading && (
                    <div className='fixed h-[90vh]'>
                        <div className="h-full w-44 rounded-md shadow-sm overflow-y-auto">
                            <div className="flex flex-col gap-y-2 px-4 py-8">
                                {
                                    surahLists?.map((surahList: surahType, index: number) => (
                                        (
                                            <Link
                                                href={`/${index + 1}`}
                                                key={surahList?.surahName}
                                                className={`px-2 py-3 rounded-lg hover:bg-neutral-100 transition-all duration-300 text-sm w-full cursor-pointer ${(index + 1).toString() !== id && 'opacity-50 hover:opacity-100'}`}
                                            >
                                                {surahList.surahName}
                                            </Link>
                                        )
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SurahListVertical