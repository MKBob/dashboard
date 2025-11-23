import React from 'react'
import { threeDotIcon, trophyIcon } from '../assets'
import RankList from './ui/RankList'
import RanklistTow from './ui/RanklistTow'

const RankContainer = () => {
    return (
        <div className='px-6 pb-6 bg-white rounded-xl h-[70vh] overflow-y-auto shadow-2xl'>
            <div className='sticky py-6 top-0 bg-white flex justify-between items-center'>
                <h1 className='flex text-xl font-semibold'>Tec toper’s <img src={trophyIcon} alt="" /></h1>
                <img src={threeDotIcon} alt="" />
            </div>
            <RankList />
            <RanklistTow />
        </div>
    )
}

export default RankContainer