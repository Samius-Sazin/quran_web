import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SurahListsSkeleton = () => {
    return (
        <div
            className="flex items-center justify-between w-full border border-neutral-200 rounded-lg px-2 py-4"
        >
            <div className="flex items-center gap-4">
                {/* <Skeleton className="w-6 h-6 rounded-md" /> */}
                <div className="flex flex-col items-start gap-1">
                    <Skeleton className="w-32 h-5" />
                    <Skeleton className="w-20 h-4" />
                </div>
            </div>
            <Skeleton className="w-10 h-5" />
        </div>
    )
}

export default SurahListsSkeleton