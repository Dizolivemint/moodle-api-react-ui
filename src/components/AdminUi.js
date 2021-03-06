import React from 'react'
import GetUsers from './users/GetUsers'
import GetCourses from './courses/GetCourses'
import ImportCourse from './courses/ImportCourse'
import FilterCourses from './courses/FilterCourses'
import ListCourses from './courses/ListCourses'
import Dropfile from './Dropfile'
import CsvDropzone from './helpers/CsvDropzone'
import Menu from './Menu'

class AdminUi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getUsers: false,
            getCourses: true,
            filterCourses: true,
            importCourses: false

        }
    }

    render() {
        return (
            <>
                {/*<Menu />*/}
                {/*<Dropfile/>*/}
                <CsvDropzone/>
                {(this.state.getUsers) && <GetUsers />}
                {(this.state.getCourses) && <GetCourses />}
                {(this.state.filterCourses) && <FilterCourses />}
                {(this.state.filterCourses) && <ListCourses />}
                {(this.state.importCourses) && <ImportCourse />}
            </>
        )
    }
}


export default AdminUi