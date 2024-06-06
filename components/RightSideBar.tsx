import { cn } from '@/lib/utils'
import React from 'react'

const RightSideBar = () => {
  return (
    <section className={cn("right_sidebar h-[calc(100vh-5px)]")}>
  
      <div className="text-white-1 flex w-full items-center justify-between">
        RightSideBar
      </div>
      </section>
  )
}

export default RightSideBar
