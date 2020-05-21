import React from 'react'
import GetUsers from './GetUsers'
import GetCourses from './GetCourses'
import ImportCourse from './ImportCourse'
import Menu from './Menu'

class AdminUi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getUsers: true,
            getCourses: false,
            importCourses: false

        }
    }

    render() {
        return (
            <div>
                <Menu />
                {(this.state.getUsers) && <GetUsers />}
                {(this.state.getCourses) && <GetCourses />}
                {(this.state.importCourses) && <ImportCourse />}
            </div>
        )
    }
}


export default AdminUi