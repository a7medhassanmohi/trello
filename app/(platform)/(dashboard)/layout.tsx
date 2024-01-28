import React, { ReactNode } from 'react'
import NavBar from './_components/NavBar'

type Props = {
    children:ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <div className='h-full '>
        <NavBar/>
        {children}
        </div>
  )
}

export default DashboardLayout