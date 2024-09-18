import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Zoom Replica",
  description: "Full functional Zoom video calling replica",
  icons: {
    icon: 'icon/logo.svg'
  }
};

const RootLayout = ({children} : {children : ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
        
    </main>
  )
}

export default RootLayout