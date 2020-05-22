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
export const requestCourses = () => ({
    type: 'REQUEST_COURSES'
})

// RECEIVE_COURSES
export const receiveCourses = (
    courses,
    status
) => ({
    type: 'RECEIVE_COURSES',
    courses,
    status,
    receivedAt: Date.now()
})

// IMPORT_COURSE
export const importCourse = ({
    courseSourceId,
    courseTargetId,
}) => ({
    type: 'IMPORT_COURSE',
    courseSourceId,
    courseTargetId
})

export const invalidateCourses = ({courses}) => ({
  type: 'INVALIDATE_COURSES',
  courses
})

export const fetchCourses = () => {
    return (dispatch) => {  
        dispatch(requestCourses())
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
                    return dispatch(receiveCourses(response.responseJSON, response.statusText))
                }
            }
        )
    }
}

export const fetchCoursesByField = (field, value) => {
    return (dispatch) => {  
        dispatch(requestCourses(field, value))
        const functionName = 'core_course_get_courses_by_field'
        const data = {
            wstoken: key.token,
            wsfunction: functionName,
            moodlewsrestformat: 'json',
            field, // id's, shortname, idnumber, category
            value
        }
        const response = $.ajax(
            {   
                type: 'GET',
                data: data,
                url: key.url,
                complete: () => {
                    console.log(response)
                    return dispatch(receiveCourses(response.responseJSON, response.statusText))
                }
            }
        )
    }
}