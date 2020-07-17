import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCourses, fetchCoursesByField } from '../../actions/courses'
import Spinner from '../../svg/Spinner'
// import { Lines } from 'react-preloaders'

const GetCourses = ({ courses, fetchCoursesByField, fetchCourses }) => {
    const [isLoading, setIsLoading] = useState(false)
    async function onSubmit () {
        setIsLoading(true)
        fetchCoursesByField('category', '69')
        // fetchCourses()
    }

    useEffect(() => {
        setIsLoading(false)
    }, [courses])

    return (
        <div>
            { isLoading 
            ?
                <Spinner /> 
            :
                <button onClick={() => onSubmit()}>
                    Get Courses
                </button>
            }
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchCourses()),
    fetchCoursesByField: (field, value) => dispatch(fetchCoursesByField(field, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(GetCourses)
