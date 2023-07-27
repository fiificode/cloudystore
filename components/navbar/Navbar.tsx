import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from '../mobile-sidebar/MobileSidebar'
import { Input } from '../ui/input'
import Searchbar from '../searchbar/Searchbar'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center p-4'>
        <MobileSidebar />
        <div className='lg:pl-64 w-full'>
        <Searchbar />
        </div>
        <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
  )
}

export default Navbar