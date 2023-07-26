"use client"

import { Search } from 'lucide-react'
import React from 'react'

const Searchbar = () => {
    const handleKeyDown = (event:any) => {
        const inputValue = event.target.value;
        console.log("Input value:", inputValue);
      };
  return (
    <div>
        <div className="flex gap-3 bg-white p-2 rounded-full items-center w-full">
            <Search className='w-6 h-6 text-gray-400'/>
            <input type="text" 
            placeholder='Search...' 
            onKeyDown={handleKeyDown}
            className='bg-transparent outline-none w-full md:w-[400px] text-[14px] text-black' />
        </div>
    </div>
  )
}

export default Searchbar