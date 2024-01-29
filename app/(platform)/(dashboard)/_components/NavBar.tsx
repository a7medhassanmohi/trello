import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'
import MobileSideBar from './MobileSideBar'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='fixed px-4 z-50 top-0 h-14 border-b shadow-sm bg-white flex items-center w-full '>
            {/* mobile sideBar */}
            <MobileSideBar/>
        <div className="flex items-center gap-x-4">
            <div className="hidden md:flex">
              <Logo/>  
            </div>
            <Button size="sm" className='rounded-sm hidden md:block h-auto py-1.5 px-2 '>
                Create
            </Button>
            <Button size="sm" className='rounded-sm block md:hidden'>
                <Plus className='size-4'/>
            </Button>
        </div>
        <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
        afterLeaveOrganizationUrl="/select-org"
        appearance={{
            elements:{
                rootBox:{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }
            }
        }}
        />
        <UserButton
        afterSignOutUrl='/'
        appearance={{
            elements:{
                avatarBox:{
                  height:30,
                  width:30  
                }
            }
        }}
        />
        </div>
    </nav>
  )
}

export default NavBar