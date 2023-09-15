import { useEffect, useState } from 'react'
import CourseCard from './CourseCard'

function Header() {
  //use states
  const [courseData, setCourseData] = useState([])
  //data fetch from api
  useEffect(() => {
    fetch('../../public/data.json')
      .then(resp => resp.json())
      .then(CourseData => setCourseData(CourseData))
  }, [])

  //selected data handelevent
  const selectedDataHandel = (course) => {
    console.log(course)
  }
  return (
    <div>
      <h1 className='text-4xl text-center font-bold my-5'>Course Registration</h1>
      <div className='flex w-11/12 mx-auto my-5 flex-col-reverse lg:flex-row sm:gap-10 max-sm:gap lg:gap-2'>
        <CourseCard courseData={courseData} selectedDataHandel={selectedDataHandel} />
      </div>
    </div>
  )
}


export default Header
