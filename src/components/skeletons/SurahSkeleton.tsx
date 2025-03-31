import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SurahSkeleton = () => {
    return (
        <div className="w-[80%] mx-auto p-6 flex flex-col gap-8">
            {/* Surah Info Skeleton */}
            <div className="flex justify-center">
                <div className="w-[70%] bg-gray-100 p-4 rounded-lg shadow-md text-center flex justify-between items-end animate-pulse">
                    <div className="flex flex-col items-start gap-2">
                        <Skeleton className="h-6 w-40" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-6 w-6 rounded-full" />
                </div>
            </div>

            {/* Ayah List Skeleton */}
            <div className="flex flex-col gap-4 mb-10">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-6 w-10" /> {/* Ayah Number */}
                            <Skeleton className="h-8 w-full" /> {/* Arabic Text */}
                            <Skeleton className="h-5 w-3/4" /> {/* English Translation */}
                            <Skeleton className="h-5 w-3/4" /> {/* Bangla Translation */}
                        </div>
                        <Skeleton className="h-[1px] my-1 w-full bg-gray-300" /> {/* Separator */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SurahSkeleton