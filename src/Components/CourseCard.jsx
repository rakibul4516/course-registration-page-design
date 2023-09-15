import PropTypes from 'prop-types'
import { BiBookReader } from "react-icons/bi";
function CourseCard({ courseData, selectedDataHandel }) {
    return (
        <div className="lg:w-9/12 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                {
                    courseData.map((course) => (
                        <>
                            <div className=" shadow-lg p-2">
                                <img src={course.thumbnail_img} alt={course.course_name} className='w-full' />
                                <h2 className="text-md font-semibold my-2">{course.course_name}</h2>
                                <p className="text-sm text-justify lg:h-20 md:h-16 mb-3">{course.course_description}</p>
                                <div className="flex items-center justify-between lg:px-3 py-4">
                                    <p className='text-md'>Price: $ {course.course_price}</p>
                                    <BiBookReader className='text-xl font-semibold' />
                                    <p className='text-md'>Credit: {course.course_duration}hr</p>
                                </div>
                                <button onClick={() => selectedDataHandel(course)} className="bg-blue-700 w-full py-2 rounded-lg text-xl text-white hover:bg-cyan-400 hover:text-black" type="button">Select</button>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
CourseCard.propTypes = {
    courseData: PropTypes.array.isRequired,
    selectedDataHandel: PropTypes.func
}
export default CourseCard