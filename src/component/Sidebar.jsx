import React, { useState } from 'react'
import logo from "../../public/logo.png"
import { activityIcon, courseIcon, homeIcon, messageIcon, walletIcon, arrowDownIcon, helpIcon, settingIcon } from '../assets'

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState("Dashboard")

    const links = [
        {
            icon: homeIcon,
            label: "Dashboard"
        },
        {
            icon: courseIcon,
            label: "Course"
        },
        {
            icon: messageIcon,
            label: "Message",
            notificationCount: 5
        },
        {
            icon: walletIcon,
            label: "My Wallet"
        },
        {
            icon: activityIcon,
            label: "My Activity",
            isDropdown: true
        },

    ]
    return (
        <div className='h-screen py-4 md:py-8 px-4 md:px-10 w-16 md:w-[18rem] shrink-0 flex flex-col justify-between bg-white sticky top-0'>
            <div className='flex flex-col justify-center'>
                <img src={logo} alt="logo" className='w-8 md:w-32 mx-auto hidden md:block' />
                <hr className='my-5 hidden md:block' />
                <div>
                    <ul>
                        {links.map((link, key) => {
                            const isActive = activeLink === link.label
                            return (
                                <li
                                    key={key}
                                    className={`flex justify-center md:justify-between items-center w-full px-2 md:px-4 py-3 cursor-pointer transition-colors rounded-xl ${isActive ? 'bg-black' : 'bg-transparent'
                                        }`}
                                    onClick={() => setActiveLink(link.label)}
                                >
                                    <div className={`flex items-center gap-2.5 text-sm ${isActive ? 'text-white' : "text-black"} relative`}>
                                        <img src={link.icon} alt={`${link.label}-icon`} className='w-6 h-6' />
                                        <span className='hidden md:inline capitalize'>{link.label}</span>
                                        {link.notificationCount && (
                                            <span className='sm:hidden absolute -top-1 -right-1 md:static md:ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                                {link.notificationCount}
                                            </span>
                                        )}
                                    </div>
                                    {link.notificationCount && (
                                        <span className='hidden sm:flex absolute -top-1 -right-1 md:static md:ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5  items-center justify-center'>
                                            {link.notificationCount}
                                        </span>
                                    )}
                                    {link.isDropdown && (
                                        <img src={arrowDownIcon} alt="dropdown" className='hidden md:block' />
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>

            <div>
                <ul>
                    {[
                        {
                            icon: helpIcon,
                            label: "Help"
                        },
                        {
                            icon: settingIcon,
                            label: "Settings"
                        }
                    ].map((link, key) => {
                        const isActive = activeLink === link.label
                        return (
                            <li
                                key={key}
                                className={`flex justify-center md:justify-between items-center w-full px-2 md:px-4 py-3 cursor-pointer transition-colors rounded-xl ${isActive ? 'bg-black' : 'bg-transparent'
                                    }`}
                                onClick={() => setActiveLink(link.label)}
                            >
                                <div className={`flex items-center gap-2.5 text-sm ${isActive ? 'text-white' : "text-black"}`}>
                                    <img src={link.icon} alt={`${link.label}-icon`} className='w-6 h-6' />
                                    <span className='hidden md:inline'>{link.label}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Sidebar