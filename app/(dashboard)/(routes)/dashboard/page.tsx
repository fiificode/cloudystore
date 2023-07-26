import React from 'react'
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <div className='grid p-5 grid-cols-1 md:grid-cols-3 md:h-screen w-full'>
        <div className='col-span-2'>
          home
        </div>
        <div className='bg-white h-full'>storage</div>
      </div>
      
    
    </>
  )
}

export default DashboardPage