import React from 'react'
import { key } from '../key'
import $ from 'jquery'

const functionName = 'core_user_get_users_by_field'

const values = [
    2
]

const field = 'id' // idnumber, email, username

const data = {
    wstoken: key.token,
    wsfunction: functionName,
    moodlewsrestformat: 'json',
    field,
    values
}

class GetUsers extends React.Component {
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
                <ul>
                    {
                        this.state.data.map((user, key) => (
                            <>
                                {user.username}<br/>
                                {user.email}<br/>
                                {user.firstname}<br/>
                                {user.lastname}<br/>
                            </>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default GetUsers
