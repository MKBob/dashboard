import React, { useState } from 'react'
import java from "../../assets/java.png"
import phytonIcon from "../../assets/phyton.png";
import cplusIcon from "../../assets/cplus.png";
const CourseFeedCards = () => {
  // Fake course data (use map to render)
  const courses = [
    { id: 1, image: phytonIcon, name: "Python" },
    { id: 2, image: java, name: "Java" },
    { id: 3, image: cplusIcon, name: "C++" },
    { id: 3, image: cplusIcon, name: "C++" },
  ];

  const [showAll, setShowAll] = useState(false)

  const visibleCourses = showAll ? courses : courses.slice(0, 3)

  return (
    <div>
      <div className='flex justify-between items-center w-full max-w-screen py-7 rounded-lg'>
        <p className='font-semibold text-xl'>Trending</p>

        <button
          className='px-4 py-1 rounded-lg text-[#8490A2] cursor-pointer'
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-6 grid-rows-5 gap-4 h-full overflow-y-auto rounded-xl">
        {visibleCourses.map((course, index) => (
          <div
            key={course.id}
            className={`col-span-2 row-span-5 bg-white px-30 py-30 shadow-1xl rounded-xl flex items-center gap-2.5`}
            style={{ gridColumnStart: (index * 2) + 1 }}
          >

            <img src={course.image}
              alt={course.name} />

            <p className="mt-3 font-semibold text-gray-700 text-lg">
              {course.name}
            </p>


          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseFeedCards
