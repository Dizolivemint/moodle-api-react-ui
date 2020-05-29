import React from 'react'
import { connect } from "react-redux"
import selectCourses from '../../selectors/courses'
import ImportCourse from './ImportCourse'
import { setTargetCourse, setSourceCourse } from '../../actions/import'

const CourseList = (props) => {
    const onSourceClick = (courseSourceId) => {
        props.setSourceCourse(courseSourceId)
        console.log(courseSourceId)
    }
    const onTargetClick = (courseTargetId) => {
        props.setTargetCourse(courseTargetId)
        console.log(courseTargetId)
    }
    return (
    <div className='list'>
        {
            props.courses.length === 0 ? (
                <div>
                    <span>No courses</span>
                </div>
            ) : (
                <>
                <ImportCourse />
                {
                    props.courses.map((course, index) => {
                        return <p key={index}>{course.shortname}
                                <br/>{course.fullname}
                                <br/>ID: {course.id}
                                <br/>
                                <button onClick={() => onSourceClick(course.id)}>Import From (Source)</button>
                                <button onClick={() => onTargetClick(course.id)}>Import To (Target)</button>
                            </p>
                    })
                }
                </>
            )
        }
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        courses: selectCourses(state.courses, state.filters)
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTargetCourse: (target) => dispatch(setTargetCourse(target)),
    setSourceCourse: (source) => dispatch(setSourceCourse(source))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)