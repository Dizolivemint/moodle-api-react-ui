import { key } from '../key'
import $ from 'jquery'

// CREATE_COURSE
export const createCourse = ({
    fullname,
    shortname,
    categoryid,
    idnumber,
    summary

} = {}) => ({
    type: 'CREATE_COURSE',
    fullname,
    shortname,
    categoryid,
    idnumber,
    summary
})

// REQUEST_COURSES
export const requestCourses = (isFetching=true) => ({
    type: 'REQUEST_COURSES',
    isFetching
})

// RECEIVE_COURSES
export const receiveCourses = (
    courses,
    status,
    isFetching
) => ({
    type: 'RECEIVE_COURSES',
    courses,
    status,
    isFetching,
    receivedAt: Date.now()
})

export const invalidateCourses = ({courses}) => ({
  type: 'INVALIDATE_COURSES',
  courses
})

export const fetchCourses = () => {
    return (dispatch) => {  
        dispatch(requestCourses(true))
        const functionName = 'core_course_get_courses'
        const data = {
            wstoken: key.token,
            wsfunction: functionName,
            moodlewsrestformat: 'json'
        }
        const response = $.ajax(
            {   
                type: 'GET',
                data: data,
                url: key.url,
                complete: () => {
                    console.log(response)
                    if (response.statusText != "success") { 
                        return dispatch(receiveCourses(null, response.status)) 
                    } else {
                        return dispatch(receiveCourses(response.responseJSON, response.statusText))
                    }
                }
            }
        )
    }
}

export const fetchCoursesByField = (field, value) => {
    return async (dispatch) => {  
        dispatch(requestCourses(true))
        const functionName = 'core_course_get_courses_by_field'
        const data = {
            wstoken: key.token,
            wsfunction: functionName,
            moodlewsrestformat: 'json',
            field, // id's, shortname, idnumber, category
            value
        }
        const response = await $.ajax(
            {   
                type: 'GET',
                data: data,
                url: key.url
            }
        )
        console.log('Ajax response', response)
        dispatch(receiveCourses(response.courses, response.statusText, false))
        return response
    }
}