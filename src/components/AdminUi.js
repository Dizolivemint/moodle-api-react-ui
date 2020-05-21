import React from 'react'
import GetUsers from './GetUsers'
import GetCourses from './GetCourses'
import ImportCourse from './ImportCourse'
import Menu from './Menu'

class AdminUi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getUsers: false,
            getCourses: true,
            importCourses: false

        }
    }

    render() {
        return (
            <>
                <Menu />
                {(this.state.getUsers) && <GetUsers />}
                {(this.state.getCourses) && <GetCourses />}
                {(this.state.importCourses) && <ImportCourse />}
            </>
        )
    }
}


export default AdminUi