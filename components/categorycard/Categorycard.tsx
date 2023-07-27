"use client"
import { ArrowRight, Folder, MoreHorizontal } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const Categorycard = ({
  name,
  color,
  icon,
  files,
  background,
  value,
}:any) => {
  const [isMounted,setIsMounted] = useState(false);
  useEffect(() => {
      setIsMounted(true);
  },[]);
  if (!isMounted) {
      return null;
  }
  return (
    <div className={cn('md:w-[180px] lg:w-[150px] xl:w-[210px] sm:w-full h-[220px] bg-[#e0e5fa] rounded-lg',background)}>
        <div className='top p-4'>
          <div className='flex flex-row justify-between items-center'>
            <div className="icon bg-white w-10 h-10 border rounded-full flex items-center justify-center">
              {/* <Folder className='w-5 h-5'/> */}
              {icon}
            </div>
            <div className="dots">
              <MoreHorizontal />
            </div>
          </div>
          <div className="title mt-4 mb-2">
            <h4 className='text-xs text-gray-500 font-semibold'>{name}</h4>
          </div>
          <div className="filenumber">
            <span className='font-bold text-lg'>{files} Files</span>
          </div>
          <div className="progressbar mt-3">
          <Progress value={value} color={color} className='w-full'/>
          <div className='flex flex-row p-1 justify-between items-center text-[10px] text-gray-600'>
            <span>24.5GB</span>
            <span>50GB</span>
          </div>
          </div>
        </div>
        <div className=' border-t-[0.8px] w-full border-t-gray-400'>
          <div className='px-4 flex mt-2 flex-row justify-between items-center text-[12px]'>
            <h4 className='font-bold'>View</h4>
            <div>
              <ArrowRight className='w-3 h-3' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Categorycard