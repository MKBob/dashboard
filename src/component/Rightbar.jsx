import React from 'react'
import RightBarControl from './ui/RightBarControl'
import RankContainer from './RankContainer'

const Rightbar = () => {
  return (
    <div className='fixed right-0 py-4 mr-6 flex flex-col gap-7'>
     <RightBarControl/>
     <RankContainer/>
    </div>
  )
}

export default Rightbar