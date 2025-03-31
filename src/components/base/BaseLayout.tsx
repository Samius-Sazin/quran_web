import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { cn } from '@/lib/utils'
import SurahListVertical from '../homepage/SurahListVertical'

const Baselayout = ({ children, className, renderSurahLists = false }: { children: ReactNode, className?: string, renderSurahLists?: boolean }) => {
    return (
        <div>
            <div className='absolute z-50'>
                <Navbar />
            </div>

            <div className='absolute z-40'>
                <Sidebar />
            </div>

            <div className={cn(`mt-[66px] md:ml-[80px]`, className)}>
                {
                    renderSurahLists
                    &&
                    <SurahListVertical />
                }

                <div className={`${renderSurahLists && 'sm:ml-[180px]'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Baselayout