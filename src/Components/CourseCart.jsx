import PropTypes from 'prop-types'

function CourseCart({ cartData, totalCradit, totalPrice, totalRemaining }) {
    return (
        <div className='lg:w-3/12 w-full'>
            <div className='shadow-lg p-3 w-11/12 mx-auto'>
                <h2 className='text-md py-2 font-semibold border-b'>Credit Hour Remaining {totalRemaining} hr</h2>
                <h2 className='text-md py-2 font-semibold border-b'>Total selected course: {cartData.length}</h2>
                <div className='border-b py-5'>
                    <h2 className='text-xl font-semibold'>Course Name</h2>
                    <ol className='list-decimal list-inside'>
                    {
                        cartData.map((course) => <><li className='text-md'>{course.course_name}</li></>)
                    }
                    </ol>
                </div>
                <h2 className='border-b py-2 text-lg '>Total Credit Hour : {totalCradit}</h2>
                <h2 className='text-lg py-2'>Total Price: $ {totalPrice}</h2>
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