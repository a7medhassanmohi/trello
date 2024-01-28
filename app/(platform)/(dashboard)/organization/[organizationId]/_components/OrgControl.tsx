"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import {useOrganizationList} from "@clerk/nextjs"

type Props = {}

const OrgControl = (props: Props) => {
  const params=useParams()
  const {setActive}=useOrganizationList()
  useEffect(() => {
    if(!setActive) return
    setActive({
      organization:params.organizationId as string
    })
   
  }, [params?.organizationId,setActive])
  
  return (
    null
  )
}
export default  OrgControl