import React from 'react'
import Sidebar from '../component/Sidebar'
import CoursePanel from '../component/CoursePanel'
import Rightbar from '../component/Rightbar'

const Layout = () => {
  return (
    <div className='flex justify-between'>
        <Sidebar/>
        <CoursePanel/>
        <Rightbar/>
    </div>
  )
}

export default Layout