"use client"

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

import React, { ReactNode } from 'react'

const TanStackProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default TanStackProvider