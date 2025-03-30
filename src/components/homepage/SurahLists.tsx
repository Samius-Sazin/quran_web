"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getAllSurahListAction } from '@/actions/HomepageActions'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SurahList from './SurahList'

type surahType = {
    surahName: string;
    surahNameArabic: string;
    surahNameArabicLong: string;
    surahNameTranslation: string;
    revelationPlace: string;
    totalAyah: number;
}

const SurahLists = () => {
    const { data: surahLists, isLoading } = useQuery({
        queryKey: ['surahLists'],
        queryFn: async () => await getAllSurahListAction(),
    })

    return (
        <div className='flex flex-col items-center'>
            <div>
                <Tabs defaultValue="surah" className="w-[400px] my-8">
                    <TabsList>
                        <TabsTrigger value="surah">Surah</TabsTrigger>
                        <TabsTrigger value="page">Page</TabsTrigger>
                        <TabsTrigger value="Juz">Juz</TabsTrigger>
                        <TabsTrigger value="hizb">Hizb</TabsTrigger>
                        <TabsTrigger value="ruku">Ruku</TabsTrigger>
                    </TabsList>
                    {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent> */}
                </Tabs>
            </div>


            {
                isLoading && (
                    //todo: show a skeleton here
                    <p>Loading...</p>
                )
            }

            {
                !isLoading &&
                (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full'>
                        {
                            surahLists?.map((surah: surahType, i: number) => (
                                <SurahList key={surah?.surahName} surah={surah} index={i} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SurahLists