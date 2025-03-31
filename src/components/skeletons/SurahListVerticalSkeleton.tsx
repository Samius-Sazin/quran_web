import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SurahListVerticalSkeleton = () => {
    return (
        <div className='fixed h-[90vh]'>
            <div className="h-full w-44 rounded-md shadow-sm overflow-y-auto">
                <div className="flex flex-col gap-y-2 px-4 py-8">
                    {
                        [...Array(9)].map((_, index) => (
                            (
                                <div key={index} className="px-2 py-3 rounded-lg bg-neutral-100 animate-pulse transition-all duration-300 text-sm w-full cursor-pointer">
                                    <Skeleton className="h-4 w-32" />
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SurahListVerticalSkeleton