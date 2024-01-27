import React, { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'

type Props = {
    children:ReactNode
}

const layout = ({children}: Props) => {
  return (
    <ClerkProvider>{children}</ClerkProvider>
  )
}

export default layout