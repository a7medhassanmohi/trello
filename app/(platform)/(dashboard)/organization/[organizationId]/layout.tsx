import React, { ReactNode } from 'react'
import OrgControl from './_components/OrgControl'

type Props = {
    children:ReactNode
}

const OrganizationIdLayout = ({children}: Props) => {
  return (
    <>
      <OrgControl/>
        {children}
    </>
  )
}

export default OrganizationIdLayout