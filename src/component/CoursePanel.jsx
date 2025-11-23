import React from 'react'
import Searchbar from './ui/Searchbar'
import AdsConatiner from './ui/AdsConatiner'
import CourseFeeds from './CourseFeeds'

const CoursePanel = () => {
  return (
    <div className="py-4 flex flex-col gap-7 items-center justify-center w-full">
      <Searchbar />
      <AdsConatiner />
      <CourseFeeds />
    </div>
  )
}

export default CoursePanel
