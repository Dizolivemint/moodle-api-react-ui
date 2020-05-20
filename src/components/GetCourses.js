

import React from 'react'
import { key } from '../key'
import $ from 'jquery'

const functionName = 'core_course_get_courses_by_field'

const value = 'WS800.MS.2018W.SD'

const field = 'shortname' // id's, shortname, idnumber, category

const data = {
    wstoken: key.token,
    wsfunction: functionName,
    moodlewsrestformat: 'json',
    field,
    value
}

class GetCourses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            responseText: '',
            data: []
        }
    }

    componentDidMount() {
        const response = $.ajax(
            {   
                type: 'GET',
                data: data,
                url: key.url,
                complete: () => {
                    console.log(response)
                    this.setState({
                        responseText: response.responseText,
                        data: response.responseJSON
                    })
                }
            }
        )
    }
    
    render() {
        return (
            <div>
                {(this.state.data.courses) && this.state.data.courses[0].displayname}
            </div>
        )
    }
}

export default GetCourses
