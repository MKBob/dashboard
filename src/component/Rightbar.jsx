import React from 'react'
import RightBarControl from './ui/RightBarControl'
import RankList from './ui/RankList'
import HiringList from './ui/HiringList'

const Rightbar = () => {
  return (
    <div className='h-screen py-4  mr-6  w-16 md:w-[18rem] shrink-0 flex flex-col gap-7 overflow-hidden'>
     <div className='shrink-0'>
       <RightBarControl/>
     </div>
      <div className=' min-h-0 overflow-hidden rounded-xl'>
       <RankList/>
     </div>
      <div className=' min-h-0 overflow-hidden rounded-xl'>
       <HiringList/>
     </div>
    </div>
  )
}

export default Rightbar