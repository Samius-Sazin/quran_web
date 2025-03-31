"use client"

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getAllSurahListAction } from '@/actions/HomepageActions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SurahList from './SurahList'
import SurahListsSkeleton from '../skeletons/SurahListsSkeleton'
import { X } from 'lucide-react'

type surahType = {
    surahName: string;
    surahNameArabic: string;
    surahNameArabicLong: string;
    surahNameTranslation: string;
    revelationPlace: string;
    totalAyah: number;
}

const SurahLists = () => {
    const [selectedTab, setSelectedTab] = useState("surah")

    const { data: surahLists, isLoading } = useQuery({
        queryKey: ['surahLists'],
        queryFn: async () => await getAllSurahListAction(),
    })

    // todo: tab optimization needed
    const updatedSurahLists =
        selectedTab === "Ayah"
            ? [...(surahLists || [])].sort((a, b) => b.totalAyah - a.totalAyah)
            : surahLists;

    return (
        <div className='flex flex-col items-center'>
            <div>
                <Tabs defaultValue="surah" onValueChange={setSelectedTab} className="w-[400px] my-8">
                    <TabsList>
                        <TabsTrigger value="surah" className='cursor-pointer'>Surah</TabsTrigger>
                        <TabsTrigger value="Ayah" className='cursor-pointer'>Ayah</TabsTrigger>
                        {/* <TabsTrigger value="Juz" className='cursor-pointer'>Juz</TabsTrigger>
                        <TabsTrigger value="hizb" className='cursor-pointer'>Hizb</TabsTrigger>
                        <TabsTrigger value="ruku" className='cursor-pointer'>Ruku</TabsTrigger> */}
                    </TabsList>
                </Tabs>
            </div>


            {
                isLoading && (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full'>
                        {
                            [...Array(9)].map((_, index) => (
                                <SurahListsSkeleton key={index} />
                            ))
                        }
                    </div>
                )
            }

            {
                !isLoading && !surahLists && (
                    <p className='flex items-center my-5'><X className='text-red-500' /> No surah found</p>
                )
            }

            {
                !isLoading &&
                (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full'>
                        {
                            updatedSurahLists?.map((surah: surahType, i: number) => (
                                <SurahList key={surah?.surahName} surah={surah} index={i} selectedTab={selectedTab} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SurahLists