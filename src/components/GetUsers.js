import React from 'react'
import { key } from '../key'
import $ from 'jquery'

const functionName = 'core_user_get_users_by_field'

const values = [
    'tluger@pacificcollege.edu'
]

const field = 'email'


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

    // componentDidUpdate() {
    //     this.state.data.map((key, value) => {
    //         return (<li key={key}>{value}</li>)
    //     })
    // }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map((user, key) => (
                            <>
                                <li key={`${key}1`}>{user.username}</li>
                                <li key={`${key}2`}>{user.email}</li>
                                <li key={`${key}3`}>{user.firstname}</li>
                                <li key={`${key}4`}>{user.lastname}</li>
                            </>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default GetUsers
