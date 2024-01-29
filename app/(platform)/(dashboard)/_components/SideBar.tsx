"use client"
import {
    Accordion
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'
import NavItem, { Organization } from './NavItem'
type Props = {
    storageKey?:string
}

const SideBar = ({storageKey="t-sidebar-state"}: Props) => {
    const [expanded,setExpanded]=useLocalStorage<Record<string,any>>(storageKey,{})
    const {organization:ActiveOrganization,isLoaded:isLoadedOrg}=useOrganization()
    const {userMemberships,isLoaded:isLoadedOrgList}=useOrganizationList({userMemberships:{infinite:true}})

    const defaultAccordionValue:string[]=Object.keys(expanded).reduce((acc:string[],curr:string)=>{
        if(expanded[curr]){
            acc.push(curr)
        }
        return acc
    },[])
const onExpand=(id:string)=>{
    setExpanded((curr)=>(
        {
            ...curr,
            [id]:!expanded[id]
        }
    ))
}
if(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading ){
    return <>
    <Skeleton/>
    </>
}

  return (
    <>
    <div className='font-medium text-xs flex items-center mb-1'>
        <span className='pl-4 '>
            WorkSpaces
        </span>
        <Button variant={"ghost"} asChild type='button' size={"icon"} className='ml-auto'>
            <Link href="/select-org">
                <Plus className='size-4'/>
            </Link>
        </Button>
    </div>
    <Accordion 
    type='multiple'
    defaultValue={defaultAccordionValue}
    className='space-y-2'
    >
        {userMemberships.data.map(({organization})=>(
            <NavItem
            key={organization.id}
            isActive={ActiveOrganization?.id===organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
            />
            
        ))}
    </Accordion>
    </>
  )
}

export default SideBar