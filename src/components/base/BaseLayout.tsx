import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { cn } from '@/lib/utils'
import SurahListVertical from '../homepage/SurahListVertical'

const Baselayout = ({ children, className, renderSurahLists = false }: { children: ReactNode, className?: string, renderSurahLists?: boolean }) => {
    return (
        <div>
            <div className='absolute top-0 left-0 w-full z-50'>
                <Navbar />
            </div>

            <div className='absolute top-[66px] left-0 z-40'>
                <Sidebar />
            </div>

            <div className={cn(`mt-[66px] ml-[80px] px-0`, className)}>
                {
                    renderSurahLists
                    &&
                    <SurahListVertical />
                }

                <div className={`${renderSurahLists && 'ml-[180px]'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Baselayout