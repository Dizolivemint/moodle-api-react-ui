import { key } from '../key'
import $ from 'jquery'

// SET_SOURCE_COURSE
export const setSourceCourse = (
    courseSourceId = -1
) => ({
    type: 'SET_SOURCE_COURSE',
    courseSourceId
})

// SET_TARGET_COURSE
export const setTargetCourse = (
    courseTargetId = -1
) => ({
    type: 'SET_TARGET_COURSE',
    courseTargetId
})

// IMPORT_COURSE_REQUEST
export const importCourseRequest = (
    response, success
) => ({
    type: 'IMPORT_COURSE',
    response,
    success,
    receivedAt: Date.now()
})

export const importCourses = (sourceId, targetId, clear="0") => {
    return (dispatch) => {  
        dispatch(importCourseRequest())
        const functionName = 'core_course_import_course'
        const importFrom = sourceId
        const importTo = targetId
        const deleteContent = parseInt(clear)
        const options = {
            activities: 1,
            blocks: 1,
            filters: 1
        }

        const data = {
            wstoken: key.token,
            wsfunction: functionName,
            moodlewsrestformat: 'json',
            importfrom: importFrom,
            importto: importTo,
            deletecontent: deleteContent
        }

        const response = $.ajax(
            {   
                type: 'GET',
                data: data,
                url: key.url,
                complete: () => {
                    console.log(response)
                    return dispatch(importCourseRequest(response.responseJSON, response.statusText))
                }
            }
        )
    }
}