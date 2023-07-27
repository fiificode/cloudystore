import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import { Cross } from 'lucide-react';
import Categorycard from '@/components/categorycard/Categorycard';

const DashboardPage = () => {
  return (
    <>
      <div className='grid p-5 grid-cols-1 gap-5 md:grid-cols-3 md:h-screen w-full'>
        <div className='col-span-2'>
          <div className="top flex justify-between mb-5">
            <div>
              <h2 className='text-xl font-semibold'>My Cloud</h2>
              <p className='text-sm text-gray-400'>Hi Franklin, Welcome Back!</p>
            </div>
            <div>
              <Button variant={"add"} size={"sm"}>
                <div className='w-5 h-5 border flex items-center justify-center rounded-full border-white'>
                  <Cross className='w-3 h-3 '/>
                </div>
                <span className='ml-2 font-semibold'>Add</span>
              </Button>
            </div>
          </div>
          <div className='grid sm:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-2'>
            <Categorycard />
            <Categorycard />
            <Categorycard />
          </div>
        </div>
        <div className='bg-white h-full'>storage</div>
      </div>
      
    
    </>
  )
}

export default DashboardPage