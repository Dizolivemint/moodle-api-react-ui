import React from 'react'
import { connect } from "react-redux"
import selectCourses from '../../selectors/courses'

const CourseList = (props) => (
    <div className='list'>
        {
            props.courses.length === 0 ? (
                <div>
                    <span>No courses</span>
                </div>
            ) : (
                props.courses.map((course, index) => {
                    return <p key={index}>{course.shortname}</p>
                })
            )
        }
    </div>
)
const mapStateToProps = (state) => {
    return {
        courses: selectCourses(state.courses, state.filters)
    }
}

export default connect(mapStateToProps)(CourseList)