import { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import CourseCart from './CourseCart'

function Header() {
  //use states
  const [courseData, setCourseData] = useState([])
  const [cartData, setCartData] = useState([])
  //data fetch from api
  useEffect(() => {
    fetch('../../public/data.json')
      .then(resp => resp.json())
      .then(CourseData => setCourseData(CourseData))
  }, [])

  //selected data handelevent
  const selectedDataHandel = (course) => {

    // Check if the course is already in the cart
    setCartData([...cartData, course])
  }
  return (
    <div>
      <h1 className='text-4xl text-center font-bold my-5'>Course Registration</h1>
      <div className='flex w-11/12 mx-auto my-5 flex-col-reverse lg:flex-row sm:gap-10 max-sm:gap lg:gap-2'>
        <CourseCard courseData={courseData} selectedDataHandel={selectedDataHandel} />
        <CourseCart cartData={cartData} />
      </div>
    </div>
  )
}


export default Header
