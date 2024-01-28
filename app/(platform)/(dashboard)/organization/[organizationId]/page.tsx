import { auth,OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {
    params:{organizationId:string}
}

const organizationPage = (props: Props) => {
    const {userId,orgId}=auth()
  return (
    <div>
        {/* <OrganizationSwitcher
        hidePersonal
        />
        <UserButton/> */}
    </div>
  )
}

export default organizationPage