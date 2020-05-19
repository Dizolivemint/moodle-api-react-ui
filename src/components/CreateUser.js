import React from 'react'
import { key } from '../key'
import $ from 'jquery'

const functionName = 'core_user_create_users'

const userstocreate = [{  
    username: 'testusername5',
    password: 'testpassword5',
    firstname: 'testfirstname5',
    lastname: 'testlastname5',
    email: 'testemail5@moodle.com',
    auth: 'manual',
}]

const data = {
    wstoken: key.token,
    wsfunction: functionName,
    moodlewsrestformat: 'json',
    users: userstocreate
}

class GetUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        const response = $.ajax(
            {   
                type: 'POST',
                data: data,
                url: key.url,
                complete: () => {
                    this.setState({data: response.responseText})
                }
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }


}

export default CreateUsers