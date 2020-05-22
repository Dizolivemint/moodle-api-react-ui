import React from 'react'
import { key } from '../../key'
import $ from 'jquery'

const functionName = 'core_course_import_course'

const importFrom = 294
const importTo = 325
const deleteContent = 1
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

class ImportCourse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            responseText: '',
            statusText: ''
        }
    }

    componentDidMount() {
        const response = $.ajax(
            {   
                type: 'POST',
                data: data,
                url: key.url,
                complete: () => {
                    console.log(response)
                    this.setState({
                        responseText: response.responseText,
                        statusText: response.statusText
                    })
                }
            }
        )
    }
    
    render() {
        return (
            <div>
                <p>{this.state.statusText}</p>
                <p>{this.state.responseText}</p>
            </div>
        )
    }
}

export default ImportCourse
