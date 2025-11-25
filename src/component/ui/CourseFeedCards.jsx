import React,{useState} from 'react'
import java from "../../assets/java.png"
import phytonIcon from "../../assets/phyton.png"
import cplusIcon from "../../assets/cplus.png"

const CourseFeedCards = () => {


  const courses = [
    { id: 1, image: java, name: "Java" },
    { id: 2, image: phytonIcon, name: "Python" },
    { id: 3, image: cplusIcon, name: "C++" },
    { id: 4, image: cplusIcon, name: "Kotlin" },
    { id: 5, image: cplusIcon, name: "React" },
    { id: 6, image: cplusIcon, name: "Node.js" }, 
    { id: 7, image: cplusIcon, name: "MongoDB" },
    { id: 8, image: cplusIcon, name: "MySQL" },
    { id: 9, image: cplusIcon, name: "PostgreSQL" },
    { id: 10, image: cplusIcon, name: "SQLite" },
    { id: 11, image: cplusIcon, name: "Redis" },
    { id: 12, image: cplusIcon, name: "Elasticsearch" },
    { id: 13, image: cplusIcon, name: "Kafka" },

  ];

  const [showAll, setShowAll] = useState(false)

  const visibleCourses = showAll ? courses : courses.slice(0, 3)

  return (
    <div className="h-full overflow-y-auto">

      <div className='flex justify-between items-center w-full max-w-screen py-7 rounded-lg sticky top-0 z-10'>
        <p className='font-semibold text-xl'>Trending</p>
        <button className='px-4 py-1 rounded-lg text-[#8490A2] cursor-pointer'>
          View All
        </button>
      </div>

      <div className="grid grid-cols-6 grid-rows-5 gap-4 rounded-xl">

        {courses.map((course) => (
          <div
            key={course.id}
            className="col-span-2 row-span-5 bg-white px-30 py-30 shadow-1xl rounded-xl flex items-center gap-2.5"
          >
            <img src={course.image} alt={course.name} />
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
