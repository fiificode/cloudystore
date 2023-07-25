import React from 'react'
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <div>DashboardPage</div>
      <UserButton afterSignOutUrl="/"/>
    
    </>
  )
}

export default DashboardPage