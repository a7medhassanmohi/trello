import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const ClerkLayout = ({children}: Props) => {
  return (
    <div className='h-full flex items-center justify-center'>{children}</div>
  )
}

export default ClerkLayout