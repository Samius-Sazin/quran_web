"use client"

import Baselayout from '@/components/base/BaseLayout';
import { Info, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator';
import ShowAyah from './ShowAyah';
import SurahSkeleton from '@/components/skeletons/SurahSkeleton';

type surahAudio = {
    reciter: string;
    url: string;
    originalUrl: string;
};

type surahType = {
    surahName: string;
    surahNameArabic: string;
    surahNameArabicLong: string;
    surahNameTranslation: string;
    revelationPlace: string;
    totalAyah: number;
    surahNo: number;
    audio: Record<string, surahAudio>;
    english: string[];
    arabic1: string[];
    arabic2: string[];
    bengali: string[];
};

const page = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [surah, setSurah] = useState<surahType | null>(null)

    useEffect(() => {
        if (!id) return;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}.json`)
            .then(response => response.json())
            .then(data => {
                setSurah(data);
                setIsLoading(false);
            })
    }, [id])

    return (
        <Baselayout renderSurahLists={true}>
            <div className='flex justify-center'>
                {
                    isLoading && (
                        <SurahSkeleton />
                    )
                }
                {
                    !isLoading && !surah && (
                        <p className='flex items-center my-5'><X className='text-red-500' /> Surah not found</p>
                    )
                }
                {
                    !isLoading && (
                        <div className="md:w-[80%] w-[100%] mx-auto p-6 flex flex-col gap-8">
                            {/* Surah Info */}
                            <div className='flex justify-center'>
                                <div className="md:w-[70%] w-[90%] bg-gray-100 p-4 rounded-lg shadow-md text-center flex justify-between items-end">
                                    <div className='flex flex-col items-start'>
                                        <h1 className="md:text-2xl text-lg font-bold">{surah?.surahNameTranslation}</h1>
                                        <p className="text-gray-600">{surah?.revelationPlace} - {surah?.totalAyah} Ayahs</p>
                                    </div>

                                    <div>
                                        <Info className='opacity-50 cursor-pointer' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 mb-10'>
                                {
                                    Array.from({ length: surah?.totalAyah ?? 0 }).map((_, index) => (
                                        <div key={index}>
                                            <ShowAyah ayahNumber={(index + 1).toString()} arabicText={surah?.arabic1[index] || ''} translationEnglish={surah?.english[index] || ''} translationBangla={surah?.bengali[index] || ''} />
                                            <Separator className='my-1' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </Baselayout>
    )
}

export default page