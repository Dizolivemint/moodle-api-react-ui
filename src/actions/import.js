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
    isFetching=true
) => ({
    type: 'IMPORT_COURSE_REQUEST',
    isFetching
})

// IMPORT_COURSE_FINSIH
export const importCourseFinish = (
    response, isFetching
) => ({
    type: 'IMPORT_COURSE_FINISH',
    response,
    isFetching,
    receivedAt: Date.now()
})

export const importCourses = (sourceId, targetId, clear='0') => {
    return async (dispatch) => {  
        dispatch(importCourseRequest(true))
        const functionName = 'core_course_import_course'
        const importFrom = sourceId
        const importTo = targetId
        const deleteContent = clear
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

        const response = await $.ajax(
            {   
                type: 'GET',
                data: data,
                url: key.url
            }
        )
        dispatch(importCourseFinish(response, false))
        return response
    }
}