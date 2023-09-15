import PropTypes from 'prop-types'

function CourseCart({ cartData}) {
    return (
        <div className='lg:w-3/12 w-full'>
            <div className='shadow-lg p-3 w-11/12 mx-auto'>
                <h2 className='text-md py-2 font-semibold border-b'>Credit Hour Remaining {} hr</h2>
                <div className='border-b py-2'>
                    <h1 className='text-xl font-semibold'>Course Name</h1>
                    {
                        cartData.map((course) => <><li className='text-md'>{course.course_name}</li></>)
                    }
                </div>
                <h2 className='border-b py-2 text-lg '>Total Credit Hour : {}</h2>
                <h2 className='text-lg'>Total Price: $ {}</h2>
            </div>
        </div>
    )
}

CourseCart.propTypes = {
    cartData: PropTypes.array,
    totalCradit: PropTypes.number,
    totalPrice: PropTypes.number,
    totalRemaining: PropTypes.number
}

export default CourseCart