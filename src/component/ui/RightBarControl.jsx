import React from 'react'
import Circle from './Circle'
import { arrowDownIcon, bellIcon } from '../../assets'
import profile from "../../assets/profile.png"

const RightBarControl = () => {
    return (
        <div className='flex gap-2.5'>
            <div className='flex items-center gap-1 p-4 rounded-xl bg-white font-medium text-sm  cursor-pointer'>
                <Circle />
                100k +
            </div>

            <div className='flex items-center gap-1 py-4 px-5 rounded-full bg-white  cursor-pointer'>
                <img src={bellIcon} alt="" />
            </div>

            <div className='flex items-center gap-1 p-4 rounded-xl bg-white cursor-pointer'>
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