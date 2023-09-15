import { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import CourseCart from './CourseCart'

function Header() {
  //use states
  const [courseData, setCourseData] = useState([])
  const [cartData, setCartData] = useState([])
  const [totalCredit, setTotalCradit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalRemaining, setTotalRemaining] = useState(20)
  //data fetch from api
  useEffect(() => {
    fetch('../../public/data.json')
      .then(resp => resp.json())
      .then(CourseData => setCourseData(CourseData))
  }, [])

  //selected data handelevent
  const selectedDataHandel = (course) => {

    // Check if the course is already in the cart
    const isSelected = cartData.find((data) => data.id === course.id);
    let courseCredit = course.course_duration;
    let coursePrice = course.course_price;
    if (isSelected) {
      return alert('Course already selected');
    } else {
      // Calculate total course credit and total course price
      cartData.forEach((data) => {
        courseCredit += data.course_duration;
      })
      cartData.forEach((data) => {
        coursePrice += data.course_price;
      })
    }
    //calculate remaining credit and set data in use state
    const creditRemainingCredit = 20 - courseCredit;
    if (courseCredit >= 20) {
      return alert('Insufficient Cradit');
    } else {
      setCartData([...cartData, course]);
      setTotalCradit(courseCredit);
      setTotalPrice(coursePrice);
      setTotalRemaining(creditRemainingCredit);
    }
  }
  return (
    <div>
      <h1 className='text-4xl text-center font-bold my-5'>Course Registration</h1>
      <div className='flex w-11/12 mx-auto my-5 flex-col-reverse lg:flex-row sm:gap-10 max-sm:gap-5 lg:gap-2'>
        <CourseCard courseData={courseData} selectedDataHandel={selectedDataHandel} />
        <CourseCart cartData={cartData}  />
      </div>
    </div>
  )
}


export default Header
