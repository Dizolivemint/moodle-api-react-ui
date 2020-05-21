import { key } from '../key'
import $ from 'jquery'

// REQUEST_CATEGORIES
export const requestCategories = ({
    criteria
}) => ({
    type: 'REQUEST_CATEGORIES',
    criteria
})

// RECEIVE_CATEGORIES
export const receiveCategories = ({
    categories,
    response
}) => ({
    type: 'RECEIVE_CATEGORIES',
    categories,
    response,
    receivedAt: Date.now()
})

export const fetchCategories = (title) = ({
    function (dispatch) {  
        dispatch(requestPosts(title))
        const functionName = 'core_course_get_courses_by_field'
        const value = 1
        const field = 'category' // id's, shortname, idnumber, category
        const data = {
            wstoken: key.token,
            wsfunction: functionName,
            moodlewsrestformat: 'json',
            field,
            value
        }
        const response = $.ajax(
            {   
                type: 'GET',
                data: data,
                url: key.url,
                complete: () => {
                    console.log(response)
                    dispatch(receivePosts(response.responseText, response.responseJSON))
                }
            }
        )
    }
})