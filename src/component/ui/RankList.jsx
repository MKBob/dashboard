import React from 'react'
import userPicture from "../../assets/user.png"
import { threeDotIcon, trophyIcon } from '../../assets'

const RankList = () => {
    const userData = [
        {
            imgUrl: userPicture,
            username: "Vishal dave",
            language: "JavaScript"
        },
        {
            imgUrl: userPicture,
            username: "Sarah Johnson",
            language: "Python"
        },
        {
            imgUrl: userPicture,
            username: "Michael Chen",
            language: "React"
        },
        {
            imgUrl: userPicture,
            username: "Emily Rodriguez",
            language: "TypeScript"
        },
        {
            imgUrl: userPicture,
            username: "David Kim",
            language: "Node.js"
        },
        {
            imgUrl: userPicture,
            username: "Jessica Martinez",
            language: "Vue.js"
        },
        {
            imgUrl: userPicture,
            username: "James Wilson",
            language: "Angular"
        },
        {
            imgUrl: userPicture,
            username: "Lisa Anderson",
            language: "Java"
        }
    ]

    return (
        
         <div className='px-4 pb-6 bg-white h-full overflow-y-auto shadow-2xl'>
                <div className='sticky py-6 top-0 bg-white flex justify-between items-center'>
                    <h1 className='flex text-xl font-semibold'>Tec toper’s <img src={trophyIcon} alt="" /></h1>
                    <img src={threeDotIcon} alt="" />
                </div>
                {userData.map((user, index) => (
                <div key={index} className='flex justify-between items-center mt-7'>
                    <div className='flex items-center gap-2.5 text-gray-400 font-semibold'>
                        <span className='text-md'>{index + 1}.</span>
                        <img src={user.imgUrl} alt={user.username} />
                        <div>
                            <h2 className='text-md text-black truncate w-24'>{user.username}</h2>
                            <p className='text-sm'>{user.language}</p>
                        </div>
                    </div>
                    <button className='text-sm text-gray-400 border px-3.5 py-2 rounded-sm cursor-pointer'>follow</button>
                </div>
            ))}
            </div>
            
     
    )
}

export default RankList