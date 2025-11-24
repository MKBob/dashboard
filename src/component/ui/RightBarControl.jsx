import React from 'react'
import Circle from './Circle'
import { arrowDownIcon, bellIcon } from '../../assets'
import profile from "../../assets/profile.png"

const RightBarControl = () => {
    return (
        <div className='flex gap-2 w-full'>
            <div className='flex items-center gap-1 px-2  py-1 rounded-xl bg-white font-medium text-sm  cursor-pointer'>
                <Circle />
                100k 
            </div>

            <div className='flex items-center justify-center gap-1 w-12 h-12 rounded-full bg-white  cursor-pointer'>
                <img src={bellIcon} alt="" />
            </div>

            <div className='flex items-center gap-1 p-2 rounded-xl bg-white cursor-pointer'>
                <div className='flex items-center'>
                    <img src={profile} alt="" className='rounded-full' />
                    <p className='ml-2 w-24 truncate'>Mikel Jon snow</p>

                </div>
                <img src={arrowDownIcon} alt="" />
            </div>
        </div>
    )
}

export default RightBarControl